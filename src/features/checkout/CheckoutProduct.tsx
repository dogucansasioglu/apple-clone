import { fadeVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';
import React from 'react';
import ProductImage from './CheckoutProductImage';
import ProductRemove from './CheckoutProductRemove';
import ProductTitle from './CheckoutProductTitle';

export interface ICheckoutProduct {
  item: ProductObj;
  index: number;
}

// use React.forwardRef for framer-motion to work
// https://www.framer.com/api/motion/component/#forwardref
// eslint-disable-next-line react/display-name
const CheckoutProduct = React.forwardRef<HTMLDivElement, ICheckoutProduct>(
  ({ item, index }, ref) => {
    return (
      <motion.div
        ref={ref}
        className="flex flex-col gap-x-4 border-b border-gray-300 py-5 sm:flex-row sm:items-center"
        key={item.product._id}
        layout
        variants={fadeVariants}
        exit="out"
        animate="in"
        initial="out"
        custom={(index + 1) * 0.2}
      >
        <ProductImage image={item.product.image} title={item.product.title} />

        <div className="flex flex-1 items-end lg:items-center">
          <ProductTitle
            id={item.product._id}
            title={item.product.title}
            quantity={item.quantity}
          />
          <ProductRemove
            id={item.product._id}
            title={item.product.title}
            price={item.product.price * item.quantity}
          />
        </div>
      </motion.div>
    );
  }
);

export default CheckoutProduct;
