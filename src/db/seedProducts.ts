import { PrismaClient } from '@prisma/client';
import data, { IProduct } from '../utils/data';
const prisma = new PrismaClient();

export default async function seedProducts() {
  for (const item of data.products) {
    createProduct(item)
      .then((product) => console.log('Producto creado:', product))
      .catch((error) => console.error(error));
  }
  await prisma.$disconnect();
}

async function createProduct(newProduct: IProduct) {
  // Verificar si la categoría existe
  let categoryId: number;
  let category = await prisma.category.findFirst({
    where: { name: newProduct.category },
  });

  // Si la categoría no existe, crearla
  if (!category) {
    category = await prisma.category.create({
      data: { name: newProduct.category },
    });
    categoryId = category.id;
  } else {
    categoryId = category.id;
  }

  // Insertar el producto en la base de datos
  const product = await prisma.product.create({
    data: {
      name: newProduct.name,
      description: newProduct.description,
      image: newProduct.image.src,
      price: parseFloat(newProduct.price),
      stock: newProduct.countInStock,
      category: { connect: { id: categoryId } },
    },
  });

  return product;
}
