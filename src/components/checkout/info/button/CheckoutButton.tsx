import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../../../../store/basketSlice';
import { fetchPostJSON } from '../../../../utils/apiHelpers';
import getStripe from '../../../../utils/getStripe';
import Button from '../../../buttons/Button';

const CheckoutButton = () => {
  const items = useSelector(selectBasketItems);
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    setLoading(true);

    const checkoutSession: StripeSession = await fetchPostJSON(
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
    <div className="my-14 flex items-center justify-center">
      <Button
        className="rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 px-8 py-4 text-xl font-semibold text-white transition-all duration-300 ease-in hover:opacity-90"
        onClick={createCheckoutSession}
        loading={loading}
      >
        <span>Check Out</span>
      </Button>
    </div>
  );
};

export default CheckoutButton;
