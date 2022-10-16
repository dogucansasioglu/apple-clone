import PrimaryButton from '@/components/buttons/PrimaryButton';
import { selectBasketItems } from '@/store/basketSlice';
import { fetchPostJSON } from '@/utils/apiHelpers';
import getStripe from '@/utils/getStripe';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function CheckoutButton() {
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
    <PrimaryButton
      className="w-full px-8 py-5 text-xl font-semibold"
      onClick={createCheckoutSession}
      loading={loading}
    >
      Check Out
    </PrimaryButton>
  );
}
