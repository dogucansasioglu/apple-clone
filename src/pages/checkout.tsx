import { CheckoutDetails, CheckoutTitle } from '@/features/checkout';
import { selectBasketLength } from '@/store/basketSlice';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useSelector } from 'react-redux';

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
          <AnimatePresence>
            {basketLength > 0 && <CheckoutDetails key="checkout" />}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
};

export default Checkout;
