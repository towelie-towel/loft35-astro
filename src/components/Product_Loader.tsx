import React, { useState, useEffect } from 'react';

interface IProps {
  alt: string;
  src: string;
}

const ProductLoader: React.FC<IProps> = ({ alt, src }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
      console.log('onLoad-Loader');
    };
  }, [src]);

  return (
    <div
      className={`relative ${
        isLoading && 'pb-[100%]'
      } flex w-full justify-center items-center`}
    >
      {isLoading ? (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-bg-color)] to-[var(--primary-bg-color)] animate-pulse"></div>
      ) : (
        <img src={src} alt={alt} />
      )}
    </div>
  );
};

export default ProductLoader;
