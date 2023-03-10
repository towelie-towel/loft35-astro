import { Category, Product } from '@prisma/client';
import ProductItem from './ProductItem';

interface IProps {
  categoryProducts: Product[];
  categoryGroup: Category;
  onProductClick: (product: Product) => void;
}

const CategoryGroup: React.FC<IProps> = ({
  categoryProducts,
  categoryGroup,
  onProductClick,
}) => {
  return (
    <div className="w-full">
      <div className="opacity-[var(--dark-reduced-opacitity-1)] my-3 mx-auto w-[85%] border-b-[2px] border-solid border-[#dfe3e6]"></div>
      <h1 className="opacity-[var(--dark-reduced-opacitity-1)] m-auto mb-3 w-[90%] text-start font-semibold text-[var(--font-terceary-color)]">
        {categoryGroup.name}
      </h1>
      <div className="m-auto flex w-full justify-center flex-wrap">
        {categoryProducts.map((product) => (
          <ProductItem
            onProductClick={onProductClick}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGroup;
