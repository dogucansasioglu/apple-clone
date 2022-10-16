import PrimaryButton from '@/components/buttons/PrimaryButton';
import { addToBasket } from '@/store/basketSlice';
import ShoppingCartIcon from '@heroicons/react/24/outline/ShoppingCartIcon';
import { useDispatch } from 'react-redux';

export interface IPromoCheckoutButton {
  product: Product;
}

export default function PromoCheckoutButton({ product }: IPromoCheckoutButton) {
  const dispatch = useDispatch();

  // add product to basket and toast notification
  const addItemToBasket = async () => {
    dispatch(addToBasket(product));
    const toast = (await import('react-hot-toast')).default;
    toast.success(`${product.title} added to bag!`, {
      position: 'bottom-center',
    });
  };

  return (
    <>
      <PrimaryButton
        onClick={addItemToBasket}
        className="flex cursor-pointer items-center justify-center rounded-full p-4"
      >
        <ShoppingCartIcon className="h-9 w-9" />
      </PrimaryButton>
    </>
  );
}
