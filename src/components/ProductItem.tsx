import type { IProduct } from '../utils/data';
import ProductDescription from './Product_Description';

interface IProps {
  product: IProduct;
  onProductClick: (product: IProduct) => void;
  productDetailRef: React.RefObject<HTMLDivElement>;
}

const ProductItem: React.FC<IProps> = ({
  product,
  onProductClick,
  productDetailRef,
}) => {
  return (
    <div className={`w-[47%] pb-4`}>
      <div className="product-card m-auto w-[95%] shadow-md">
        <div
          className="relative w-full overflow-hidden rounded-t-lg"
          onClick={(e) => {
            e.preventDefault();
            onProductClick(product);
          }}
        >
          <img
            src={product.image.src}
            alt={product.image.name}
            loading="lazy"
            sizes="(max-width: 800px) 75vw, 800px"
          />
        </div>
        <ProductDescription product={product} />
      </div>
    </div>
  );
};
export default ProductItem;
