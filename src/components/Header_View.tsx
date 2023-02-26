import CardSlider from './Card_Slider';
import data from '../utils/data';

const HeaderView = () => {
  return (
    <div className="w-[95%] m-auto rounded-t-lg bg-[var(--secondary-bg-color)] shadow-lg transition-all">
      <CardSlider images={data.slider} />
    </div>
  );
};

export default HeaderView;
