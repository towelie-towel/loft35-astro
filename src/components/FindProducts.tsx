import React, { useState } from 'react';
import { MagnifyingGlass } from './Icons';

const FindProducts = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className={`mr-10 flex h-10 justify-around`}
    >
      <div className="relative flex items-center">
        <input
          type="text"
          id="search"
          value={searchValue}
          onChange={handleSearchInputChange}
          placeholder="Buscar"
          className="h-full max-w-[200px] rounded-l-lg border-[1px] border-r-0 border-[var(--btn-input-border-primary-color)] bg-[var(--btn-input-primary-color)] px-4 font-medium text-[#555555]"
        />
        <button
          type="submit"
          className="flex h-full min-w-[40px] items-center justify-center rounded-r-lg border-[1px] border-[var(--btn-input-border-primary-color)] bg-[var(--btn-input-primary-color)] px-2"
        >
          <MagnifyingGlass stroke="var(--ico-secondary-color)" width={18} />
        </button>
      </div>
    </form>
  );
};

export default FindProducts;
