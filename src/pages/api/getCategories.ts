import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity.server";

type Data = {
  categories: Category[];
};

const query = groq`*[_type == "category"]{
  _id,
  ...
}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let categories = await sanityClient.fetch(query);
  if (categories) {
    res.status(200).json({ categories });
  } else {
    res.status(404).json({ categories: [] });
  }
}
