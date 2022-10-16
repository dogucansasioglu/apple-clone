import { selectBasketItems } from '@/store/basketSlice';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useSelector } from 'react-redux';
import CheckoutProduct from './CheckoutProduct';

export default function CheckoutProducts() {
  const items = useSelector(selectBasketItems);
  // useAutoAnimate is a hook that will animate the items in the list
  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <div ref={parent}>
      {items.map((item) => (
        <CheckoutProduct key={item.product._id} item={item} />
      ))}
    </div>
  );
}
