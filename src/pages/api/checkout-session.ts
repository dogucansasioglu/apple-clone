// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { urlFor } from '../../lib/sanity.server';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-08-01',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const items: ProductObj[] = req.body.items;

    const line_items = items.map((item) => {
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

    const images = items.map((item) => {
      return urlFor(item.product.image).url();
    });

    try {
      // Create Checkout Sessions from body params
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

      res.status(200).json(checkoutSession);
    } catch (err) {
      console.log(err);
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error';
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
