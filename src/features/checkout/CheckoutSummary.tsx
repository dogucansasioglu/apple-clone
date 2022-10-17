import { fadeYVariants } from '@/components/utility/motion/Variants';
import { selectBasketTotal } from '@/store/basketSlice';
import { m } from 'framer-motion';
import { useSelector } from 'react-redux';

export default function CheckoutSummary() {
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <m.div className="my-10" variants={fadeYVariants}>
      <div className="flex justify-between text-lg font-bold">
        <div>
          <p>Subtotal</p>
          <p className="font-normal text-gray-500">
            Shipping and taxes will be calculated at checkout.
          </p>
        </div>
        <p>${basketTotal}</p>
      </div>
    </m.div>
  );
}
