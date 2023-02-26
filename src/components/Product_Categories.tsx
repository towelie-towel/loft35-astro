interface IProps {
  categories: string[][];
}

const ProductCategories: React.FC<IProps> = ({ categories }) => {
  return (
    <div className="flex w-full flex-col pb-8">
      <div className="mx-auto w-[90%] py-4">
        <h2 className="text-left text-[1rem] font-semibold opacity-[var(--dark-reduced-opacitity-1)]">
          Productos disponibles
        </h2>
      </div>
      <div className=" mx-auto w-[94%] items-center overflow-x-scroll whitespace-nowrap px-0 pb-3">
        {categories.map((category) => {
          return (
            <button
              className="opacity-[var(--dark-reduced-opacitity-1)] active:bg-[var(--light-gray) mr-2 inline-block overflow-hidden rounded-md bg-[var(--transparent-gray-1)] py-1 px-[2%] text-start font-semibold text-[var(--font-secondary-color)] shadow-2xl hover:bg-[var(--light-gray)]"
              key={category.join()}
            >
              {category.join(' & ')}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategories;
