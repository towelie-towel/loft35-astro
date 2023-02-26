type CardProps = {
  src: string;
  name: string;
};

export const Card: React.FC<CardProps & Record<string, unknown>> = ({
  src,
  name,
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="relative w-[90%] pb-[30%] rounded-md shadow-lg">
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
