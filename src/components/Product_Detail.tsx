import type { IProduct } from '../utils/data';
import React, { useEffect, useState } from 'react';
import ProductDescription from './Product_Description';
import ProductLoader from './Product_Loader';

interface IProps {
  product?: IProduct | null;
  closeProductDetail: () => void;
}

const ProductDetail: React.FC<IProps> = ({ product, closeProductDetail }) => {
  const [displayedImg, setDisplayedImg] = useState<string | undefined>();

  useEffect(() => {
    setDisplayedImg(product?.image.src);
  }, [product]);

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
          className="absolute flex justify-center flex-col items-center w-[90%] h-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--secondary-bg-color)] rounded-lg shadow-lg"
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              closeProductDetail();
            }}
            className="absolute z-50 top-0 right-0 "
          >
            Close
          </button>
          <div className="relative p-5 overflow-visible">
            {displayedImg && (
              <ProductLoader src={displayedImg} alt={product.image.name} />
            )}

            <div className="absolute bottom-[-10px] right-1/2 flex flex-wrap">
              <img
                className="w-[50px] h-[50px] rounded-md"
                style={{
                  border:
                    !displayedImg || displayedImg === product.image.src
                      ? 'black solid 1px'
                      : 'white solid 1px',
                }}
                onClick={() => {
                  setDisplayedImg(product.image.src);
                }}
                src={product.image.src}
                alt={product.image.name}
              />
              {product.secondaryImages.map((image) => {
                return (
                  <img
                    className="w-[50px] h-[50px] rounded-md"
                    onClick={() => {
                      setDisplayedImg(image.src);
                    }}
                    style={{
                      border:
                        displayedImg === image.src
                          ? 'black solid 1px'
                          : 'white solid 1px',
                    }}
                    src={image.src}
                    alt={image.name}
                  />
                );
              })}
            </div>
          </div>

          <div className="w-[80%] h-auto overflow-hidden">
            <ProductDescription product={product} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
