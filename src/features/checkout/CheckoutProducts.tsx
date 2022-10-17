import { selectBasketItems } from '@/store/basketSlice';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import CheckoutProduct from './CheckoutProduct';

export default function CheckoutProducts() {
  const items = useSelector(selectBasketItems);

  return (
    <AnimatePresence presenceAffectsLayout={true} mode="popLayout">
      {items.map((item, index) => (
        <CheckoutProduct key={item.product._id} item={item} index={index} />
      ))}
    </AnimatePresence>
  );
}
