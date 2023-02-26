import { Card } from './Card';

interface CardSlider {
  src: string;
  name: string;
}

const CardSlider: React.FC<{ images: CardSlider[] }> = ({ images }) => {
  return (
    <div className="relative flex w-full">
      {images.map((image, index) => (
        <Card key={image.name} src={image.src} name={image.name} />
      ))}
    </div>
  );
};

export default CardSlider;
