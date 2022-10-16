import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
interface SanityConfig {
  projectId: string;
  dataset: string;
  apiVersion: string;
  token: string;
  useCdn?: boolean;
}

export const config: SanityConfig = {
  apiVersion: '2021-10-21',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN as string,
};

export const sanityClient = createClient(config);

// urlFor is a helper function to generate a url for an image
export const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder(config).image(source);
