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

interface ProductObj {
  product: Product;
  quantity: number;
}

interface ReduxStoreState {
  _id: {
    product: Product;
    quantity: number;
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
