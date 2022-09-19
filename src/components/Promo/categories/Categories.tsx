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
        `whitespace-nowrap rounded-t-lg py-2 px-4 text-base font-light outline-none sm:py-3 sm:px-5 md:py-4 md:px-8 md:text-lg ${
          selected
            ? 'borderGradient transition-300 bg-promo text-gray-50'
            : 'transition-300 border-b-2 border-promo text-gray-500'
        }`
      }
    >
      {category.title}
    </Tab>
  ));
  return <>{cat}</>;
};
export default Categories;
