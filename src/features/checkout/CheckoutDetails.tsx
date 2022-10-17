import { containerVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// adding dynamic import for componets
const DynamicCheckoutProducts = dynamic(() => import('./CheckoutProducts'), {
  suspense: true,
});
const DynamicCheckoutSummary = dynamic(() => import('./CheckoutSummary'), {
  suspense: true,
});
const DynamicCheckoutButton = dynamic(() => import('./CheckoutButton'), {
  suspense: true,
});

export default function CheckoutDetails() {
  return (
    <motion.div
      className="flex flex-col"
      initial="out"
      animate="in"
      exit="out"
      variants={containerVariants}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicCheckoutProducts />
        <DynamicCheckoutSummary />
        <DynamicCheckoutButton />
      </Suspense>
    </motion.div>
  );
}
