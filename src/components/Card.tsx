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
      className="flex w-[80vw] flex-col items-center justify-center"
    >
      <div className="relative w-[90%] rounded-md shadow-lg">
        <img src={src} alt={name} />
      </div>
    </div>
  );
};
