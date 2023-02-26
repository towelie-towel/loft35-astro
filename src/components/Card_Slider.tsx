import { Card } from './Card';

interface CardSlider {
  src: string;
  name: string;
}

const CardSlider: React.FC<{ images: CardSlider[] }> = ({ images }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex w-full items-center justify-start">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Card src={image.src} name={image.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
