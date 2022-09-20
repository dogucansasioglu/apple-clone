import { useSelector } from 'react-redux';
import { selectBasketItems } from '../../../store/basketSlice';
import CheckoutProduct from './product/CheckoutProduct';

const CheckoutProducts = () => {
  const items = useSelector(selectBasketItems);
  return (
    <>
      {items.map((item) => (
        <CheckoutProduct key={item.product._id} item={item} />
      ))}
    </>
  );
};

export default CheckoutProducts;
