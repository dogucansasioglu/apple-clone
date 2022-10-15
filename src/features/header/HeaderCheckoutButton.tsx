import { basketLength } from '@/store/basketSlice';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function HeaderCheckoutButton() {
  const length = useSelector(basketLength);
  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <Link href="/checkout">
      <div className="group relative cursor-pointer" ref={parent}>
        {length > 0 && (
          <span className="absolute -right-1 -top-1 z-50 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-violet-400 text-xs text-white">
            {length}
          </span>
        )}
        <ShoppingBagIcon className="h-8 w-8 cursor-pointer text-gray-800 transition-all duration-300 ease-in group-hover:text-violet-500" />
      </div>
    </Link>
  );
}
