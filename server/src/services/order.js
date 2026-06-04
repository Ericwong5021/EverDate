const { PrismaClient } = require('@prisma/client');
const paymentService = require('./payment');

const prisma = new PrismaClient();

class OrderService {
  async createOrder(userId, paymentMethod, metadata = {}) {
    const orderNo = paymentService.generateOrderNo();
    const amount = parseInt(process.env.PAYMENT_AMOUNT) || 990; // ¥9.9
    
    const order = await prisma.order.create({
      data: {
        orderNo,
        userId,
        amount,
        paymentMethod,
        status: 'pending',
        description: 'EverDate纪念日服务 - ¥9.9',
        metadata: JSON.stringify(metadata)
      }
    });

    return order;
  }

  async getOrder(orderNo) {
    return prisma.order.findUnique({
      where: { orderNo }
    });
  }

  async getUserOrders(userId) {
    return prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
  }

  async updateOrderStatus(orderNo, status, paidAt = null) {
    return prisma.order.update({
      where: { orderNo },
      data: {
        status,
        ...(paidAt && { paidAt })
      }
    });
  }

  async handlePaymentCallback(method, callbackData) {
    // Verify the callback signature
    const isValid = paymentService.verifyPaymentCallback(method, callbackData);
    if (!isValid) {
      throw new Error('Invalid payment callback signature');
    }

    // Extract order info based on payment method
    let orderNo, status;
    
    if (method === 'wechat_pay') {
      orderNo = callbackData.out_trade_no;
      status = callbackData.result_code === 'SUCCESS' ? 'paid' : 'failed';
    } else if (method === 'alipay') {
      orderNo = callbackData.out_trade_no;
      status = callbackData.trade_status === 'TRADE_SUCCESS' ? 'paid' : 'failed';
    }

    // Update order status
    const order = await this.updateOrderStatus(
      orderNo,
      status,
      status === 'paid' ? new Date() : null
    );

    // If paid, mark user as having paid
    if (status === 'paid' && order.userId) {
      await prisma.user.update({
        where: { id: order.userId },
        data: { paid: true }
      });
    }

    return order;
  }

  async checkUserAccess(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { paid: true }
    });
    
    return user?.paid || false;
  }
}

module.exports = new OrderService();