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
    };
  }, [src]);

  return (
    <div className={`relative  flex w-full justify-center items-center`}>
      {isLoading ? (
        <div
          className={` ${
            isLoading && 'pb-[100%]'
          } w-full inset-0 bg-gradient-to-br from-[var(--secondary-bg-color)] to-[var(--primary-bg-color)] animate-pulse`}
        ></div>
      ) : (
        <img loading="lazy" src={src} alt={alt} />
      )}
    </div>
  );
};

export default ProductLoader;
