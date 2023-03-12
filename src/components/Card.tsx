import { useState, useEffect } from "react";

interface IProps {
  src: string;
  alt: string;
}

const Card: React.FC<IProps> = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className="flex-shrink-0 w-full">
      <div
        className={`relative w-[90%] shadow-md my-3 mx-auto rounded-md flex justify-center items-center ${
          isLoading && "pb-[32%]"
        }`}
      >
        {isLoading ? (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-bg-color)] to-[var(--primary-bg-color)] animate-pulse"></div>
        ) : (
          <img loading="lazy" src={src} alt={alt} />
        )}
      </div>
    </div>
  );
};

export default Card;
