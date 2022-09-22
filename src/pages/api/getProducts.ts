import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../lib/sanity.server';

type Data = {
  products: Product[];
};

const query = groq`*[_type == "product"] {
  ...,
  "image": {
    "_ref": image.asset._ref,
    "lqip": image.asset->metadata.lqip
  } 
} | order(_createdAt asc)`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products = await sanityClient.fetch(query);
  if (products) {
    res.status(200).json({ products });
  } else {
    res.status(404).json({ products: [] });
  }
}
