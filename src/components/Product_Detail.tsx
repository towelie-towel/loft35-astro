import type { IProduct } from '../utils/data';
import React from 'react';
import ProductLoader from './Product_Loader';

interface IProps {
  product: IProduct | null;
  closeProductDetail: () => void;
}

const ProductDetail: React.FC<IProps> = ({ product, closeProductDetail }) => {
  if (!product) return <></>;
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--secondary-bg-color)] p-4 rounded-lg shadow-lg">
      <ProductLoader src={product.image.src} alt={product.image.name} />
      <h1 className="mb-4 text-lg font-medium">{product.name}</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          closeProductDetail();
        }}
        className="absolute top-0 right-0 p-4"
      >
        Close
      </button>
    </div>
  );
};

export default ProductDetail;
