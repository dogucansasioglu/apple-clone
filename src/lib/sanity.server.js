import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  apiVersion: "2021-10-21",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
};

export const sanityClient = createClient(config);

export const urlFor = (source) => imageUrlBuilder(config).image(source);
