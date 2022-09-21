import Head from 'next/head';
import { useSelector } from 'react-redux';
import CheckoutInfo from '../components/checkout/info/CheckoutInfo';
import CheckoutProducts from '../components/checkout/products/CheckoutProducts';
import CheckoutTitle from '../components/checkout/title/CheckoutTitle';
import { selectBasketItems } from '../store/basketSlice';

const Checkout = () => {
  const items = useSelector(selectBasketItems);

  return (
    <div className="bg-color min-h-[35vh]">
      <Head>
        <title>Bag - Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-5xl pb-24">
        <CheckoutTitle length={items.length} />

        {items.length > 0 && (
          <div className="mx-5 flex flex-col gap-y-1 md:mx-8">
            <CheckoutProducts />
            <CheckoutInfo />
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
