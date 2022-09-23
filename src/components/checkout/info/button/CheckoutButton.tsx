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

    // const itemsArray = items.map((item) => {
    //   const {
    //     category: _,
    //     description: __,
    //     slug: ___,
    //     _updatedAt: ____,
    //     _rev: _____,
    //     _createdAt: ______,
    //     _type: _______,
    //     _id: ________,
    //     ...newObj
    //   } = item.product;
    //   newObj.quantity = item.quantity;
    //   return newObj;
    // });

    const checkoutSession: StripeSession = await fetchPostJSON(
      '/api/checkout-session',
      {
        // items: itemsArray,
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
        className="transition-300 bg-gpv5 rounded-lg px-8 py-4 text-xl font-semibold text-white"
        onClick={createCheckoutSession}
        loading={loading}
      >
        <span>Check Out</span>
      </Button>
    </div>
  );
};

export default CheckoutButton;
