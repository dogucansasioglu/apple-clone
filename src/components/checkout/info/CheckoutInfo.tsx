import { useSelector } from 'react-redux';
import { selectBasketTotal } from '../../../store/basketSlice';
import CheckoutButton from './button/CheckoutButton';

const CheckoutInfo = () => {
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <div className="my-12 mt-6">
      <div className="">
        <div className="divide-y divide-gray-300">
          <div className="pb-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${basketTotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>FREE</p>
            </div>
          </div>
          <div className="flex justify-between pt-4 text-xl font-semibold">
            <h4>Total</h4>
            <h4>${basketTotal}</h4>
          </div>
        </div>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default CheckoutInfo;
