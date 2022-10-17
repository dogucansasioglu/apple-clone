import { fadeYVariants } from '@/components/utility/motion/Variants';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';

export interface IPromoCategories {
  categories: Category[];
}

export default function PromoCategories({ categories }: IPromoCategories) {
  if (categories.length === 0)
    return (
      <div className="text-center text-2xl text-white">No categories found</div>
    );

  return (
    <>
      {categories.map((category) => (
        <motion.div key={category._id} variants={fadeYVariants}>
          <Tab
            id={category._id}
            className={({ selected }) =>
              `rounded-t-lg bg-left-bottom bg-no-repeat py-3.5 px-5 outline-none transition-all duration-300 ease-in sm:py-5 sm:px-9 sm:text-lg ${
                selected
                  ? 'bg-promo bg-gradient-promo-hover bg-size-border-hover text-gray-50'
                  : 'bg-gradient-promo bg-size-border text-gray-500'
              }`
            }
          >
            {category.title}
          </Tab>
        </motion.div>
      ))}
    </>
  );
}
