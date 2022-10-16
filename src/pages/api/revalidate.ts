import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check for the POST request
  if (req.method !== 'POST') {
    return res
      .status(400)
      .json({ error: 'Invalid HTTP method. Only POST requests are allowed.' });
  }

  // check for the secret token
  if (req.query.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // check for body is not empty
    const body = req.body;
    if (!body) {
      res.status(400).send('Bad request (no body)');
      return;
    }

    // check for the required fields
    const isRevalidate = body.isRevalidate;
    if (!isRevalidate) {
      res.status(400).send('Bad request (no isRevalidate)');
      return;
    }
    // revalidate the page
    await res.revalidate(`/`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
