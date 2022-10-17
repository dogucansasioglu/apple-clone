import { selectBasketLength } from '@/store/basketSlice';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import BasketLink from './BasketLink';

export interface IBasket {
  isStorybook?: boolean;
}

export default function Basket({ isStorybook }: IBasket) {
  let basketLength = useSelector(selectBasketLength);
  if (isStorybook) {
    // to test the basket component in storybook
    basketLength = 1;
  }

  return (
    <AnimatePresence>
      {basketLength > 0 && <BasketLink count={basketLength} key="basket" />}
    </AnimatePresence>
  );
}
