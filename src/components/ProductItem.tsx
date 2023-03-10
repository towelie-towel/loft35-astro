import { Product } from '@prisma/client';
import ProductDescription from './Product_Description';
import ProductLoader from './Product_Loader';

interface IProps {
  product: Product;
  onProductClick: (product: Product) => void;
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
          <ProductLoader
            src={product.image || '/placeholder.png'}
            alt={product.name}
          />
        </div>
        <ProductDescription product={product} />
      </div>
    </div>
  );
};
export default ProductItem;
