import { groq } from 'next-sanity';
import { sanityClient } from './sanity.server';

// select all categories
const query = groq`*[_type == "category"]{
  _id,
  ...
}`;

export async function loadCategories() {
  // Call an external API endpoint to get posts
  const res = await sanityClient.fetch(query);
  if (res) {
    const categories: Category[] = res;
    return { categories };
  } else {
    return { categories: [] };
  }
}
