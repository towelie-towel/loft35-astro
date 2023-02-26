import { ShoppingCart, InstagramIcon, StarIcon } from './Icons';
import FindProducts from './FindProducts';
import { useEffect, useState } from 'react';

const NavBar: React.FC = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement?.setAttribute('data-color-scheme', 'light');
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.querySelector('html');
    if (darkModeEnabled) {
      htmlElement?.setAttribute('data-color-scheme', 'light');
      setDarkModeEnabled(false);
    } else {
      htmlElement?.setAttribute('data-color-scheme', 'dark');
      setDarkModeEnabled(true);
    }
  };

  return (
    <nav className="my-5 mx-auto flex h-auto w-[95%] items-center justify-center">
      <div className="flex w-[90%] flex-row items-center justify-center max-md:justify-between">
        <FindProducts />
        <div className="flex w-1/3 justify-around max-md:justify-between">
          <StarIcon
            onClick={toggleTheme}
            stroke={'var(--ico-primary-color)'}
            height={15}
          />
          <InstagramIcon stroke="var(--ico-primary-color)" height={15} />
          <ShoppingCart stroke="var(--ico-primary-color)" height={15} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
