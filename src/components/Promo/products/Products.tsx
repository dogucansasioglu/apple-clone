import { Tab } from '@headlessui/react';
import PromoCard from '../../cards/promo/PromoCard';

export interface IProducts {
  categories: Category[];
  products: Product[];
}

const Products = ({ categories, products }: IProducts) => {
  if (categories.length === 0)
    return (
      <div className="text-center text-2xl text-white">No categories found</div>
    );

  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <PromoCard product={product} key={product._id} />);
  };

  return (
    <>
      {categories.map((category, index) => (
        <Tab.Panel
          key={category._id}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3"
        >
          {showProducts(index)}
        </Tab.Panel>
      ))}
    </>
  );
};

export default Products;
