import { IProduct } from '@/utils/data';
import CategoryGroup from '@/components/CategoryGroup';
import ProductCategories from '@/components/Product_Categories';
import { useState } from 'react';
import ProductDetail from './Product_Detail';

interface IProps {
  products: IProduct[];
  categories: string[][];
}

const ProductScroll: React.FC<IProps> = ({ products, categories }) => {
  const [productDetail, setProductDetail] = useState<
    null | undefined | IProduct
  >();

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

      <ProductDetail product={productDetail} closeProductDetail={closeModal} />
    </div>
  );
};

export default ProductScroll;
