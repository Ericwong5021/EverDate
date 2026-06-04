const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const paymentService = require('../services/payment');
const orderService = require('../services/order');

// Create payment order
router.post('/create', [
  body('userId').notEmpty().withMessage('User ID is required'),
  body('paymentMethod').isIn(['wechat_pay', 'alipay']).withMessage('Invalid payment method')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { userId, paymentMethod, metadata } = req.body;
    
    // Create order in database
    const order = await orderService.createOrder(userId, paymentMethod, metadata);
    
    // Create payment with third-party
    const amount = parseInt(process.env.PAYMENT_AMOUNT) || 990;
    const paymentResult = await paymentService.createPayment(
      paymentMethod,
      order.orderNo,
      amount,
      'EverDate纪念日服务 - ¥9.9'
    );

    res.json({
      success: true,
      data: {
        orderNo: order.orderNo,
        amount: order.amount,
        paymentMethod,
        qrCode: paymentResult.qrCode,
        codeUrl: paymentResult.codeUrl,
        status: 'pending'
      }
    });
  } catch (error) {
    console.error('Create payment error:', error);
    res.status(500).json({ error: 'Failed to create payment' });
  }
});

// Check payment status
router.get('/status/:orderNo', async (req, res) => {
  try {
    const { orderNo } = req.params;
    const order = await orderService.getOrder(orderNo);
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json({
      success: true,
      data: {
        orderNo: order.orderNo,
        status: order.status,
        amount: order.amount,
        paymentMethod: order.paymentMethod,
        paidAt: order.paidAt,
        createdAt: order.createdAt
      }
    });
  } catch (error) {
    console.error('Check status error:', error);
    res.status(500).json({ error: 'Failed to check payment status' });
  }
});

// WeChat Pay callback
router.post('/wechat/notify', async (req, res) => {
  try {
    const callbackData = req.body;
    
    await orderService.handlePaymentCallback('wechat_pay', callbackData);
    
    // WeChat Pay expects specific response format
    res.send('<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>');
  } catch (error) {
    console.error('WeChat Pay callback error:', error);
    res.send('<xml><return_code><![CDATA[FAIL]]></return_code><return_msg><![CDATA[ERROR]]></return_msg></xml>');
  }
});

// Alipay callback
router.post('/alipay/notify', async (req, res) => {
  try {
    const callbackData = req.body;
    
    await orderService.handlePaymentCallback('alipay', callbackData);
    
    // Alipay expects 'success' response
    res.send('success');
  } catch (error) {
    console.error('Alipay callback error:', error);
    res.send('fail');
  }
});

// Verify payment (for frontend polling)
router.get('/verify/:orderNo', async (req, res) => {
  try {
    const { orderNo } = req.params;
    const order = await orderService.getOrder(orderNo);
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    const hasAccess = await orderService.checkUserAccess(order.userId);
    
    res.json({
      success: true,
      data: {
        orderNo: order.orderNo,
        status: order.status,
        paid: order.status === 'paid',
        hasAccess
      }
    });
  } catch (error) {
    console.error('Verify payment error:', error);
    res.status(500).json({ error: 'Failed to verify payment' });
  }
});

module.exports = router;