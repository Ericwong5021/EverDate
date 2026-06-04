const express = require('express');
const router = express.Router();
const orderService = require('../services/order');

// Get user orders
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await orderService.getUserOrders(userId);
    
    res.json({
      success: true,
      data: orders.map(order => ({
        orderNo: order.orderNo,
        amount: order.amount,
        paymentMethod: order.paymentMethod,
        status: order.status,
        paidAt: order.paidAt,
        createdAt: order.createdAt
      }))
    });
  } catch (error) {
    console.error('Get user orders error:', error);
    res.status(500).json({ error: 'Failed to get user orders' });
  }
});

// Get order details
router.get('/:orderNo', async (req, res) => {
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
        amount: order.amount,
        currency: order.currency,
        paymentMethod: order.paymentMethod,
        status: order.status,
        description: order.description,
        paidAt: order.paidAt,
        createdAt: order.createdAt
      }
    });
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({ error: 'Failed to get order' });
  }
});

// Check user access
router.get('/access/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const hasAccess = await orderService.checkUserAccess(userId);
    
    res.json({
      success: true,
      data: { hasAccess }
    });
  } catch (error) {
    console.error('Check access error:', error);
    res.status(500).json({ error: 'Failed to check access' });
  }
});

module.exports = router;