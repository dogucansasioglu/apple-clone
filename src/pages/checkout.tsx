import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import CheckoutTitle from '../components/checkout/title/CheckoutTitle';
import { selectBasketItems } from '../store/basketSlice';

const DynamicCheckoutProducts = dynamic(
  () => import('../components/checkout/products/CheckoutProducts'),
  {
    suspense: true,
  }
);
const DynamicCheckoutInfo = dynamic(
  () => import('../components/checkout/info/CheckoutInfo'),
  {
    suspense: true,
  }
);

const Checkout = () => {
  const items = useSelector(selectBasketItems);

  return (
    <div className="bg-ws min-h-[35vh]">
      <Head>
        <title>Bag - Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-5xl">
        <CheckoutTitle length={items.length} />

        {items.length > 0 && (
          <div className="mx-5 flex flex-col gap-y-1 md:mx-8">
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicCheckoutProducts />
              <DynamicCheckoutInfo />
            </Suspense>
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
