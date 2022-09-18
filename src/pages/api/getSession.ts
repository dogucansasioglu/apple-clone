import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-08-01',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sessionId = req.query.sessionId as string;

  const session = await stripe.checkout.sessions.listLineItems(sessionId);

  res.status(200).json({ session });
}
