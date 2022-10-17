import PrimaryButton from '@/components/buttons/PrimaryButton';
import { selectBasketLength } from '@/store/basketSlice';
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon';
import { m } from 'framer-motion';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { fadeYVariants } from '../utility/motion/Variants';

export default function HeaderCheckoutButton() {
  const length = useSelector(selectBasketLength);

  return (
    <m.div variants={fadeYVariants}>
      <Link href="/checkout">
        <div className="group relative cursor-pointer">
          {length > 0 && (
            <PrimaryButton
              rounded="rounded-full"
              className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center text-xs"
            >
              {length}
            </PrimaryButton>
          )}
          <ShoppingBagIcon className="h-8 w-8 cursor-pointer text-gray-800 transition-all duration-300 ease-in group-hover:text-violet-500" />
        </div>
      </Link>
    </m.div>
  );
}
