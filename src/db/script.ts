import { PrismaClient } from '@prisma/client';
import data from '@/utils/data';

const prisma = new PrismaClient();

async function seedProducts() {
  for (const product of data.products) {
    const createdProduct = await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        image: product.image.src,
        price: parseFloat(product.price),
        slug: product.slug,
        stock: product.countInStock,

        category: product.category, //Category @relation(fields: [categoryId], references: [id])
        categoryId: product.category, //Int

        orders: [], //Order[]  @relation("Product-Orders")
      },
    });
    console.log(`Created product with ID ${createdProduct.id}`);
  }
}

seedProducts()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });

async function seedDatabase() {
  await seedCategories();
  await seedProducts();
}
