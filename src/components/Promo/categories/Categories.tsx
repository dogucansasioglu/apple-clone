import { Tab } from '@headlessui/react';

export interface ICategories {
  categories: Category[];
}

const Categories = ({ categories }: ICategories) => {
  const cat = categories.map((category) => (
    <Tab
      key={category._id}
      id={category._id}
      className={({ selected }) =>
        `whitespace-nowrap rounded-t-lg py-2 px-4 text-base outline-none sm:py-3 sm:px-5 md:py-4 md:px-8 md:text-lg ${
          selected
            ? 'bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:100%_2px] bg-left-bottom bg-no-repeat pb-[5px] text-center transition-all duration-300 ease-in-out bg-promo text-gray-50'
            : 'transition-all duration-300 ease-in-out border-b-2 border-promo text-gray-500'
        }`
      }
    >
      {category.title}
    </Tab>
  ));
  return <>{cat}</>;
};
export default Categories;
