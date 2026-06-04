const axios = require('axios');

const API_BASE = 'http://localhost:3001/api';

async function testPaymentFlow() {
  console.log('Testing EverDate Payment Flow...\n');

  try {
    // 1. Health check
    console.log('1. Health check...');
    const health = await axios.get(`${API_BASE}/health`);
    console.log('   ✓ Server is running:', health.data.status);

    // 2. Create payment order
    console.log('\n2. Creating payment order...');
    const createResponse = await axios.post(`${API_BASE}/payment/create`, {
      userId: '115ff9ca-d024-4f88-bcdc-2324b48ce74c',
      paymentMethod: 'wechat_pay',
      metadata: { service: 'everdate_anniversary' }
    });

    if (createResponse.data.success) {
      const order = createResponse.data.data;
      console.log('   ✓ Order created:', order.orderNo);
      console.log('   ✓ Amount: ¥' + (order.amount / 100).toFixed(2));
      console.log('   ✓ Payment method:', order.paymentMethod);
      console.log('   ✓ QR code generated:', order.qrCode ? 'Yes' : 'No');

      // 3. Check order status
      console.log('\n3. Checking order status...');
      const statusResponse = await axios.get(`${API_BASE}/payment/status/${order.orderNo}`);
      if (statusResponse.data.success) {
        console.log('   ✓ Order status:', statusResponse.data.data.status);
        console.log('   ✓ Created at:', statusResponse.data.data.createdAt);
      }

      // 4. Get user orders
      console.log('\n4. Getting user orders...');
      const ordersResponse = await axios.get(`${API_BASE}/orders/user/115ff9ca-d024-4f88-bcdc-2324b48ce74c`);
      if (ordersResponse.data.success) {
        console.log('   ✓ User orders count:', ordersResponse.data.data.length);
      }

      // 5. Check user access
      console.log('\n5. Checking user access...');
      const accessResponse = await axios.get(`${API_BASE}/orders/access/115ff9ca-d024-4f88-bcdc-2324b48ce74c`);
      if (accessResponse.data.success) {
        console.log('   ✓ User has access:', accessResponse.data.data.hasAccess);
      }

      console.log('\n✅ All tests passed!');
    }
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    if (error.response) {
      console.error('   Response:', error.response.data);
    }
    process.exit(1);
  }
}

testPaymentFlow();