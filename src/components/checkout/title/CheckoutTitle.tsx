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
          classes="mx-auto primaryButton"
          onClick={() => router.push('/')}
        >
          <span>Continue Shopping</span>
        </Button>
      )}
    </div>
  );
};

export default CheckoutTitle;
