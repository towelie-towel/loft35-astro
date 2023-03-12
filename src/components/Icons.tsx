interface IProps {
  width?: number;
  height?: number;
  stroke?: string;
}

export const MagnifyingGlass: React.FC<IProps> = ({
  width,
  height,
  stroke,
}) => {
  return (
    <svg
      fill="none"
      width={width || height || 40}
      height={height || width || 40}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={stroke || "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};

export const PrevSlider: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      width={width || height || 32}
      height={height || width || 32}
      fill="none"
      viewBox="0 0 24 24"
      stroke={stroke || "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
};

export const NextSlider: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      width={width || height || 32}
      height={height || width || 32}
      fill="none"
      viewBox="0 0 24 24"
      stroke={stroke || "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
};

export const ShoppingCart: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width={width || height || 40}
      height={height || width || 40}
      stroke={stroke || "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
};

export const StarIcon: React.FC<IProps & { onClick?: () => void }> = ({
  width,
  height,
  stroke,
  onClick,
}) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width={width || height || 40}
      height={height || width || 40}
      stroke={stroke || "currentColor"}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
};

export const InstagramIcon: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      stroke={stroke || "currentColor"}
      width={width || height || 40}
      height={height || width || 40}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6361 7H17.6477"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AddToCartIcon: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      width={width || height || 40}
      height={height || width || 40}
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke={stroke || "currentColor"}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17h-11v-14h-2" />
      <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13" />
      <path d="M15 6h6m-3 -3v6" />
    </svg>
  );
};
