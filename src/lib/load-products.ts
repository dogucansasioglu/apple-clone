import { groq } from 'next-sanity';
import { sanityClient } from './sanity.server';

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

  // const data = await res.json();
  // const products: Product[] = res.products;
  // if (products) {
  // return { products };
  // } else {
  // return { products: [] };
  // }
}
