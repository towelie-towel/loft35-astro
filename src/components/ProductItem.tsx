import type { IProduct } from '../utils/data';
import ProductDescription from './Product_Description';
import ProductLoader from './Product_Loader';

interface IProps {
  product: IProduct;
  onProductClick: (product: IProduct) => void;
}

const ProductItem: React.FC<IProps> = ({ product, onProductClick }) => {
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
          <ProductLoader src={product.image.src} alt={product.image.name} />
        </div>
        <ProductDescription product={product} />
      </div>
    </div>
  );
};
export default ProductItem;
