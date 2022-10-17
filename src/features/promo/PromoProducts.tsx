import { containerVariants } from '@/components/utility/motion/Variants';
import { Tab } from '@headlessui/react';
import { AnimatePresence, m } from 'framer-motion';
import PromoProduct from './PromoProduct';

export interface IPromoProducts {
  categories: Category[];
  products: Product[];
}

export default function PromoProducts({
  categories,
  products,
}: IPromoProducts) {
  if (categories.length === 0 || products.length === 0)
    return (
      <div className="text-center text-2xl text-white">No categories found</div>
    );

  // show the current category's products
  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <PromoProduct product={product} key={product._id} />);
  };

  return (
    <>
      {categories.map((category, index) => (
        <Tab.Panel
          key={category._id}
          // className="grid auto-rows-[1fr] grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="wait">
            <m.div
              className="grid auto-rows-[1fr] grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3"
              initial="out"
              whileInView="in"
              exit="out"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {showProducts(index)}
            </m.div>
          </AnimatePresence>
        </Tab.Panel>
      ))}
    </>
  );
}
