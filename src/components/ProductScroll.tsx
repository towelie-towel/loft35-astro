import CategoryGroup from '@/components/CategoryGroup';
import ProductCategories from '@/components/Product_Categories';
import { useState } from 'react';
import ProductDetail from './Product_Detail';
import { Category, Product } from '@prisma/client';

export interface IProps {
  products: Product[];
  categories: Category[];
}

const ProductScroll: React.FC<IProps> = ({ products, categories }) => {
  const [productDetail, setProductDetail] = useState<
    null | undefined | Product
  >();

  function openModal(product: Product) {
    setProductDetail(product);

    const htmlElement = document.querySelector('html') as HTMLHtmlElement;
    htmlElement.style.overflow = 'hidden';
  }

  function closeModal() {
    setProductDetail(null);
    const htmlElement = document.querySelector('html') as HTMLHtmlElement;
    htmlElement.style.overflow = 'auto';
  }

  return (
    <div className="m-auto w-[95%] rounded-b-lg bg-[var(--secondary-bg-color)]">
      <ProductCategories categories={categories} />
      {categories.map((category, index) => {
        const categoryProducts = products.filter(
          (product) => product.categoryId === category.id
        );
        return (
          <CategoryGroup
            key={index}
            onProductClick={openModal}
            categoryProducts={categoryProducts}
            categoryGroup={category}
          />
        );
      })}

      <ProductDetail product={productDetail} closeProductDetail={closeModal} />
    </div>
  );
};

export default ProductScroll;
