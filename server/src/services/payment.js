const crypto = require('crypto');
const QRCode = require('qrcode');
const { v4: uuidv4 } = require('uuid');

// WeChat Pay SDK (simplified integration)
class WeChatPayService {
  constructor() {
    this.appId = process.env.WECHAT_PAY_APP_ID;
    this.mchId = process.env.WECHAT_PAY_MCH_ID;
    this.apiKey = process.env.WECHAT_PAY_API_KEY;
    this.notifyUrl = process.env.WECHAT_PAY_NOTIFY_URL;
  }

  generateNonceStr() {
    return crypto.randomBytes(16).toString('hex');
  }

  generateSign(params) {
    const sortedParams = Object.keys(params)
      .sort()
      .map(key => `${key}=${params[key]}`)
      .join('&');
    
    return crypto
      .createHash('sha256')
      .update(`${sortedParams}&key=${this.apiKey}`)
      .digest('hex')
      .toUpperCase();
  }

  async createOrder(orderNo, amount, description) {
    const params = {
      appid: this.appId,
      mch_id: this.mchId,
      nonce_str: this.generateNonceStr(),
      body: description || 'EverDate纪念日服务',
      out_trade_no: orderNo,
      total_fee: amount,
      spbill_create_ip: '127.0.0.1',
      notify_url: this.notifyUrl,
      trade_type: 'NATIVE'
    };

    params.sign = this.generateSign(params);
    
    // In real implementation, call WeChat Pay API here
    // For demo, we generate a mock QR code
    const mockCode = `weixin://wxpay/bizpayurl?pr=${orderNo}`;
    
    return {
      codeUrl: mockCode,
      qrCode: await QRCode.toDataURL(mockCode),
      orderId: orderNo
    };
  }

  verifyCallback(data) {
    // Verify WeChat Pay callback signature
    const { sign, ...otherParams } = data;
    const calculatedSign = this.generateSign(otherParams);
    return calculatedSign === sign;
  }
}

// Alipay SDK (simplified integration)
class AlipayService {
  constructor() {
    this.appId = process.env.ALIPAY_APP_ID;
    this.privateKey = process.env.ALIPAY_PRIVATE_KEY;
    this.alipayPublicKey = process.env.ALIPAY_PUBLIC_KEY;
    this.notifyUrl = process.env.ALIPAY_NOTIFY_URL;
    this.returnUrl = process.env.ALIPAY_RETURN_URL;
  }

  generateSign(params) {
    const sortedParams = Object.keys(params)
      .filter(key => params[key] !== undefined && params[key] !== '')
      .sort()
      .map(key => `${key}=${params[key]}`)
      .join('&');

    const sign = crypto
      .createSign('RSA-SHA256')
      .update(sortedParams)
      .sign(this.privateKey, 'base64');

    return sign;
  }

  async createOrder(orderNo, amount, description) {
    const params = {
      app_id: this.appId,
      method: 'alipay.trade.precreate',
      charset: 'utf-8',
      sign_type: 'RSA2',
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      version: '1.0',
      notify_url: this.notifyUrl,
      biz_content: JSON.stringify({
        out_trade_no: orderNo,
        total_amount: (amount / 100).toFixed(2),
        subject: description || 'EverDate纪念日服务',
        product_code: 'FAST_INSTANT_TRADE_PAY'
      })
    };

    params.sign = this.generateSign(params);
    
    // In real implementation, call Alipay API here
    // For demo, we generate a mock QR code
    const mockCode = `https://qr.alipay.com/${orderNo}`;
    
    return {
      qrCode: await QRCode.toDataURL(mockCode),
      orderId: orderNo,
      codeUrl: mockCode
    };
  }

  verifyCallback(data) {
    // Verify Alipay callback signature
    const { sign, sign_type, ...otherParams } = data;
    const sortedParams = Object.keys(otherParams)
      .filter(key => otherParams[key] !== undefined && otherParams[key] !== '')
      .sort()
      .map(key => `${key}=${otherParams[key]}`)
      .join('&');

    const verify = crypto.createVerify('RSA-SHA256');
    verify.update(sortedParams);
    return verify.verify(this.alipayPublicKey, sign, 'base64');
  }
}

// Payment service factory
class PaymentService {
  constructor() {
    this.wechatPay = new WeChatPayService();
    this.alipay = new AlipayService();
  }

  generateOrderNo() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `ED${timestamp}${random}`;
  }

  async createPayment(method, orderNo, amount, description) {
    switch (method) {
      case 'wechat_pay':
        return this.wechatPay.createOrder(orderNo, amount, description);
      case 'alipay':
        return this.alipay.createOrder(orderNo, amount, description);
      default:
        throw new Error(`Unsupported payment method: ${method}`);
    }
  }

  verifyPaymentCallback(method, data) {
    switch (method) {
      case 'wechat_pay':
        return this.wechatPay.verifyCallback(data);
      case 'alipay':
        return this.alipay.verifyCallback(data);
      default:
        throw new Error(`Unsupported payment method: ${method}`);
    }
  }
}

module.exports = new PaymentService();