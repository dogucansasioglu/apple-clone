// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { urlFor } from '../../lib/sanity.server';

// Stripe requires the raw body to construct the event.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-08-01',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check for the POST request
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  } else {
    // from the request body, get the product id
    const items: ProductObj[] = req.body.items;
    // from the items, prepare the line items for stripe
    const images: string[] = [];
    const line_items = items.map((item) => {
      images.push(urlFor(item.product.image).url() as string);
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.product.title,
            images: [urlFor(item.product.image).url() as string],
          },
          unit_amount: item.product.price * 100,
        },
        quantity: item.quantity,
      };
    });

    try {
      // create a new checkout session
      const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ['card'],
        line_items,
        payment_intent_data: {},
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/checkout`,
        metadata: {
          images: JSON.stringify(images),
        },
      };
      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);

      // return the session id
      res.status(200).json(checkoutSession);
    } catch (err) {
      // if there was an error, return the error
      console.log(err);
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error';
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  }
}
