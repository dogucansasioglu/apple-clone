import { useRouter } from 'next/router';
import Button from '../../buttons/Button';

export interface ICheckoutTitle {
  length: number;
}

const CheckoutTitle = ({ length }: ICheckoutTitle) => {
  const router = useRouter();

  return (
    <div className="px-5">
      <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
        {length > 0 ? 'Your Bag' : 'Your bag is empty'}
      </h1>
      <p className="my-4">Free delivery and free returns.</p>
      {length === 0 && (
        <Button
          className="mx-auto rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in hover:opacity-90 md:px-8 md:py-4 xl:text-xl"
          onClick={() => router.push('/')}
        >
          <span>Continue Shopping</span>
        </Button>
      )}
    </div>
  );
};

export default CheckoutTitle;
