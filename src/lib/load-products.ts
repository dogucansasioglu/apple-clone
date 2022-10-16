import { groq } from 'next-sanity';
import { sanityClient } from './sanity.server';

// select all products
const query = groq`*[_type == "product"] {
  ...,
  "image": {
    "_ref": image.asset._ref,
    "lqip": image.asset->metadata.lqip
  } 
} | order(_createdAt asc)`;

export async function loadProducts() {
  // Call an external API endpoint to get posts
  const res = await sanityClient.fetch(query);
  if (res) {
    const products: Product[] = res;
    return { products };
  } else {
    return { products: [] };
  }
}
