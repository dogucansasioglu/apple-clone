import PrimaryButton from '@/components/buttons/PrimaryButton';

export interface IBasketCount {
  count: number;
}

export default function BasketCount({ count }: IBasketCount) {
  return (
    <PrimaryButton
      rounded="rounded-full"
      className="absolute -right-1 -top-1 z-50 flex h-7 w-7 items-center justify-center text-xs"
    >
      {count}
    </PrimaryButton>
  );
}
