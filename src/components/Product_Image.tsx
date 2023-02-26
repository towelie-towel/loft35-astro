import type { IStoreImage } from '../utils/data';

interface IProps {
  image: IStoreImage;
}

const ProductImage: React.FC<IProps> = ({ image }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-t-lg">
      <img
        src={image.src}
        alt={image.name}
        sizes="(max-width: 425px) 50vw,
              (max-width: 768px) 75vw,
              (max-width: 1024px) 100vw"
      />
    </div>
  );
};

export default ProductImage;
