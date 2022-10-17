import { containerVariants } from '@/components/utility/motion/Variants';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import PromoCategories from './PromoCategories';
import PromoProducts from './PromoProducts';
import PromoTitle from './PromoTitle';

export interface IPromo {
  products: Product[];
  categories: Category[];
}

export default function Promo({ products, categories }: IPromo) {
  return (
    <motion.section
      className="relative z-30 -mt-[100vh] min-h-screen space-y-10 bg-promo-dark py-16"
      initial="out"
      whileInView="in"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <PromoTitle />

      <Tab.Group>
        <Tab.List className="flex justify-center px-5">
          <PromoCategories categories={categories} />
        </Tab.List>
        <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-5">
          <PromoProducts categories={categories} products={products} />
        </Tab.Panels>
      </Tab.Group>
    </motion.section>
  );
}
