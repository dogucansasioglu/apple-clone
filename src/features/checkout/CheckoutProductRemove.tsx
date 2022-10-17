import SecondaryButton from '@/components/buttons/SecondaryButton';
import { removeFromBasket } from '@/store/basketSlice';
import { useDispatch } from 'react-redux';

export interface ICheckoutProductRemove {
  id: string;
  title: string;
  price: number;
}

export default function CheckoutProductRemove({
  id,
  title,
  price,
}: ICheckoutProductRemove) {
  const dispatch = useDispatch();

  // Remove item from basket and update total price in basket
  const removeItemFromBasket = async () => {
    dispatch(removeFromBasket(id));
    const toast = (await import('react-hot-toast')).default;

    toast.success(`${title} removed from bag`, {
      position: 'bottom-center',
    });
  };

  return (
    <div className="flex flex-col items-end space-y-4">
      <h4 className="text-xl font-medium md:text-2xl">${price}</h4>
      <SecondaryButton
        className=" bg-secondary font-medium hover:bg-secondary-hover"
        withBorder={false}
        onClick={removeItemFromBasket}
      >
        Remove
      </SecondaryButton>
    </div>
  );
}
