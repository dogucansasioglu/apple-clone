import { useState } from 'react';
import { useSelector } from 'react-redux';
import Stripe from 'stripe';
import { selectBasketItems } from '../../../../store/basketSlice';
import { fetchPostJSON } from '../../../../utils/apiHelpers';
import getStripe from '../../../../utils/getStripe';
import Button from '../../../Button';

// TODO: dynamic import stripe

const CheckoutButton = () => {
  const items = useSelector(selectBasketItems);
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    setLoading(true);

    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
      '/api/checkout-session',
      {
        items,
      }
    );

    if (checkoutSession) {
      if (checkoutSession.mode !== 'payment') {
        setLoading(false);
        return;
      }

      const stripe = await getStripe();
      if (stripe) {
        stripe.redirectToCheckout({ sessionId: checkoutSession.id });
      } else {
        console.error('Stripe is not loaded');
      }
    }
    setLoading(false);
  };

  return (
    <div className="flex-center my-14">
      <Button
        classes="transition-300 bg-gpv5 rounded-lg px-8 py-4 text-white font-semibold text-xl"
        onClick={createCheckoutSession}
        loading={loading}
      >
        <span>Check Out</span>
      </Button>
    </div>
  );
};

export default CheckoutButton;
