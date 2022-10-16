import CheckoutTitleButton from './CheckoutTitleButton';

export interface ICheckoutTitle {
  length: number;
}

export default function CheckoutTitle({ length }: ICheckoutTitle) {
  return (
    <>
      <h1 className="my-4 text-4xl font-semibold">
        {length > 0 ? 'Your Bag' : 'Your bag is empty'}
      </h1>
      <div className="mt-10 mb-5  border-b border-gray-300"></div>
      <CheckoutTitleButton length={length} />
    </>
  );
}
