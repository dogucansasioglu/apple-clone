// TODO: import this component on click
import { selectBasketLength } from '@/store/basketSlice';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useSelector } from 'react-redux';
import BasketLink from './BasketLink';

export interface IBasket {
  isStorybook?: boolean;
}

export default function Basket({ isStorybook }: IBasket) {
  let basketLength = useSelector(selectBasketLength);
  const [parent] = useAutoAnimate<HTMLDivElement>();
  if (isStorybook) {
    basketLength = 1;
  }

  return (
    <div ref={parent}>
      {basketLength > 0 && <BasketLink count={basketLength} />}
    </div>
  );
}
