import { IPromoCard } from './PromoCard';

const base: IPromoCard = {
  product: {
    _createdAt: '2022-09-15T15:50:20Z',
    _id: 'c829d634-30db-4168-8fa1-0822f8035807',
    _rev: 'lC9kKFrqWLq43LJkclwP6k',
    _type: 'product',
    _updatedAt: '2022-09-15T15:50:20Z',
    category: {
      _ref: '382389ea-cfd8-437d-9598-b0f1c1110c92',
      _type: 'reference',
    },
    image: [
      {
        _key: '84343843bec6',
        _type: 'image',
        asset: {
          _ref: 'image-fc281dacd18efa736854b43f974404da94222e5c-640x800-webp',
          _type: 'reference',
        },
      },
    ],
    price: 799,
    slug: {
      _type: 'slug',
      current: 'ipad-pro',
    },
    title: 'iPad Pro',
    description: '',
  },
};

export const mockPromoCardProps = {
  base,
};
