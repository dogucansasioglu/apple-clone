interface Category {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'category';
  slug: {
    _type: 'slug';
    current: string;
  };
  title: string;
}

interface Product {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'product';
  slug: {
    _type: 'slug';
    current: string;
  };
  title: string;
  description: string;
  price: number;
  image: Image[];
  category: {
    _ref: string;
    _type: 'reference';
  };
}

interface StripeProductClient {
  title: string;
  price: number;
  image: Image[];
}

interface Image {
  _key: string;
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface StripeProduct {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: number;
  price: {
    unit_amount: number;
  };
}

// import type { NextComponentType, NextPageContext } from "next";
// import type { Session } from "next-auth";
// import type { Router } from "next/router";

// declare module "next/app" {
//   type AppProps<P = Record<string, unknown>> = {
//     Component: NextComponentType<NextPageContext, any, P>;
//     router: Router;
//     __N_SSG?: boolean;
//     __N_SSP?: boolean;
//     pageProps: P & {
//       /** Initial session passed in from `getServerSideProps` or `getInitialProps` */
//       session?: Session;
//     };
//   };
// }
