import { useEffect } from 'react';

type CardProps = {
  src: string;
  name: string;
};

export const Card: React.FC<CardProps & Record<string, unknown>> = ({
  src,
  name,
  ...restProps
}) => {
  useEffect(() => {
    return;
  });

  return (
    <div
      {...restProps}
      className="flex w-[var(--slider-width)] flex-col items-center justify-center"
    >
      <div className="relative w-[90%] rounded-md shadow-lg">
        <img className="h-[150px]" src={src} alt={name} />
      </div>
    </div>
  );
};
