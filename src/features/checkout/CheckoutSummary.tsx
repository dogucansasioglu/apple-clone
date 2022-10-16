import { selectBasketTotal } from '@/store/basketSlice';
import { useSelector } from 'react-redux';

export default function CheckoutSummary() {
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <div className="my-10">
      <div className="flex justify-between text-lg font-bold">
        <div>
          <p>Subtotal</p>
          <p className="font-normal text-gray-500">
            Shipping and taxes will be calculated at checkout.
          </p>
        </div>
        <p>${basketTotal}</p>
      </div>
    </div>
  );
}
