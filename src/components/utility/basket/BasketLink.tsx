import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import BasketCount from './BasketCount';

export interface IBasketLink {
  count: number;
}

export default function BasketLink({ count }: IBasketLink) {
  return (
    <Link href="/checkout">
      <a className="group fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-basket bg-size-gradient-bg bg-no-repeat transition-all duration-300 ease-in hover:bg-basket-hover hover:bg-size-gradient-bg-hover">
        <BasketCount count={count} />
        <ShoppingBagIcon className="h-8 w-8 transition-all duration-300 ease-in group-hover:text-white" />
      </a>
    </Link>
  );
}
