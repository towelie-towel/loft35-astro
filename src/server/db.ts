import { PrismaClient, Admin } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newAdmin: Admin = await prisma.admin.create({
    data: {
      id: 12345678,
      firstName: 'Annet',
      lastName: 'undefined',
      email: 'undefined',
      LoPassword: '12345678',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });

const admins = await prisma.admin.findMany();
