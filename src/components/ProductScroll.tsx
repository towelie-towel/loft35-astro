import { IProduct } from '@/utils/data';
import CategoryGroup from '@/components/CategoryGroup';
import ProductCategories from '@/components/Product_Categories';
import { useState } from 'react';
import ProductDetail from './Product_Detail';

export interface IProps {
  products: IProduct[];
  categories: string[][];
}

const ProductScroll: React.FC<IProps> = ({ products, categories }) => {
  const [productDetail, setProductDetail] = useState<null | IProduct>(null);

  function openModal(product: IProduct) {
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
        const categoryProducts = products.filter((product) =>
          category.includes(product.category)
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
      <div
        className={`fixed inset-0 z-10 h-full w-full bg-gray-900 bg-opacity-75 ${
          productDetail ? 'scale-100' : 'scale-0'
        } transform transition-transform`}
      >
        <ProductDetail
          product={productDetail}
          closeProductDetail={closeModal}
        />
      </div>
    </div>
  );
};

export default ProductScroll;
