import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Router();

// In-memory store for demo
const orders = new Map<string, any>();

// Create payment order
router.post("/orders", (req, res) => {
  const { anniversaryId, method } = req.body;

  if (!anniversaryId || !method) {
    return res.status(400).json({ error: "anniversaryId and method are required" });
  }

  if (!["wechat", "alipay"].includes(method)) {
    return res.status(400).json({ error: "Invalid payment method" });
  }

  const id = uuidv4();
  const order = {
    id,
    anniversaryId,
    amount: 9.9,
    currency: "CNY",
    method,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  orders.set(id, order);

  // In production, this would integrate with WeChat Pay / Alipay SDK
  // For demo, return a mock payment URL
  res.json({
    order,
    paymentUrl: `https://example.com/pay/${id}`,
    qrCode: `mock-qr-code-${id}`,
  });
});

// Get order status
router.get("/orders/:id", (req, res) => {
  const { id } = req.params;
  const order = orders.get(id);

  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }

  res.json(order);
});

// Webhook for payment callback (called by payment provider)
router.post("/webhook", (req, res) => {
  const { orderId, status } = req.body;

  const order = orders.get(orderId);
  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }

  order.status = status;
  orders.set(orderId, order);

  res.json({ received: true });
});

export default router;
