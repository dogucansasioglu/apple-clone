import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

// Stripe requires the raw body to construct the event.
const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-08-01',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get session id from request body
  const sessionId = req.query.sessionId as string;
  // get session from stripe
  const session = await stripe.checkout.sessions.listLineItems(sessionId);
  // return session
  res.status(200).json({ session });
}
