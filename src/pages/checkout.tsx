import { CheckoutDetails, CheckoutTitle } from '@/features/checkout';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { selectBasketLength } from '../store/basketSlice';

const Checkout = () => {
  const basketLength = useSelector(selectBasketLength);

  return (
    <>
      <Head>
        <title>Bag - Equal</title>
      </Head>

      <main className="p-5">
        <div className="mx-auto max-w-5xl">
          <CheckoutTitle length={basketLength} />

          {basketLength > 0 && <CheckoutDetails />}
        </div>
      </main>
    </>
  );
};

export default Checkout;
