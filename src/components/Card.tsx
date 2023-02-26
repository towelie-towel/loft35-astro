type CardProps = {
  src: string;
  name: string;
};

export const Card: React.FC<CardProps> = ({ src, name }) => {
  return (
    <div className="flex-shrink-0 w-full">
      <div className="relative w-[90%] pb-[30%] shadow-md my-3 mx-auto rounded-md">
        <img
          src={src}
          alt={name}
          sizes="(max-width: 425px) 50vw,
          (max-width: 768px) 75vw,
          (max-width: 1024px) 100vw"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
