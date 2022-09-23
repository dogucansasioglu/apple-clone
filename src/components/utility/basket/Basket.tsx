// TODO: import this component on click
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../../../store/basketSlice';

const Basket = () => {
  const items = useSelector(selectBasketItems);
  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <div ref={parent}>
      {items.length > 0 && (
        <Link href="/checkout">
          <div className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300">
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 absolute -right-1 -top-1 z-50 flex h-7 w-7 items-center justify-center rounded-full text-sm text-white">
              {items.length}
            </span>
            <ShoppingBagIcon className="h-8 w-8" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default Basket;
