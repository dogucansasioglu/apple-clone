import PrimaryButton from '@/components/buttons/PrimaryButton';
import { selectBasketLength } from '@/store/basketSlice';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function HeaderCheckoutButton() {
  const length = useSelector(selectBasketLength);
  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <Link href="/checkout">
      <div className="group relative cursor-pointer" ref={parent}>
        {length > 0 && (
          <PrimaryButton
            rounded="rounded-full"
            group="group-"
            className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center text-xs"
          >
            {length}
          </PrimaryButton>
        )}
        <ShoppingBagIcon className="h-8 w-8 cursor-pointer text-gray-800 transition-all duration-300 ease-in group-hover:text-violet-500" />
      </div>
    </Link>
  );
}
