export interface IBasketCount {
  count: number;
}

export default function BasketCount({ count }: IBasketCount) {
  return (
    <span className="absolute -right-1 -top-1 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-primary bg-size-gradient-bg text-white">
      {count}
    </span>
  );
}
