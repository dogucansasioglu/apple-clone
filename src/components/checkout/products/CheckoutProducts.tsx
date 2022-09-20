import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../../../store/basketSlice';
import CheckoutProduct from './product/CheckoutProduct';

const CheckoutProducts = () => {
  const items = useSelector(selectBasketItems);
  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <div ref={parent}>
      {items.map((item) => (
        <CheckoutProduct key={item.product._id} item={item} />
      ))}
    </div>
  );
};

export default CheckoutProducts;
