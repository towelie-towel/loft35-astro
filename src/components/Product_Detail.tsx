import type { IProduct } from '../utils/data';
import React from 'react';
import ProductLoader from './Product_Loader';

interface IProps {
  product: IProduct | null;
  closeProductDetail: () => void;
}

const ProductDetail: React.FC<IProps> = ({ product, closeProductDetail }) => {
  return (
    <div
      className={`fixed inset-0 z-10 h-full w-full bg-[#bdbcbc7e] ${
        product ? 'scale-100' : 'scale-0'
      } transform  transition-transform`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        closeProductDetail();
      }}
    >
      {product && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute flex justify-center flex-col items-center w-[80%] h-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--secondary-bg-color)] rounded-lg shadow-lg"
        >
          <h1 className="mb-4 text-lg font-medium">{product.name}</h1>
          <img
            className="w-[80%] h-auto"
            src={product.image.src}
            alt={product.image.name}
          />
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
      )}
    </div>
  );
};

export default ProductDetail;
