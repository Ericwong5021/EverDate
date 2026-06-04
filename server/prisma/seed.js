const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create a demo user
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@everdate.com' },
    update: {},
    create: {
      email: 'demo@everdate.com',
      name: 'Demo User',
      phone: '13800138000',
      paid: false
    }
  });

  console.log('Created demo user:', demoUser);

  // Create a sample order
  const sampleOrder = await prisma.order.upsert({
    where: { orderNo: 'ED1234567890ABC' },
    update: {},
    create: {
      orderNo: 'ED1234567890ABC',
      userId: demoUser.id,
      amount: 990,
      currency: 'CNY',
      paymentMethod: 'wechat_pay',
      status: 'pending',
      description: 'EverDate纪念日服务 - ¥9.9',
      metadata: JSON.stringify({ service: 'everdate_anniversary' })
    }
  });

  console.log('Created sample order:', sampleOrder);

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });