import { signIn, signOut } from 'next-auth/react';
import { IHeaderIcons } from './HeaderIcons';

const base: IHeaderIcons = {
  items: [
    {
      _createdAt: '2022-09-15T15:50:58Z',
      _id: 'a096a18c-6aaf-4262-affd-362af8c58869',
      _rev: 'ulIlB3C1ybMcX1KsIxcY7J',
      _type: 'product',
      _updatedAt: '2022-09-15T15:50:58Z',
      category: {
        _ref: '382389ea-cfd8-437d-9598-b0f1c1110c92',
        _type: 'reference',
      },
      image: [
        {
          _key: 'ce559d5dd2f6',
          _type: 'image',
          asset: {
            _ref: 'image-ac50976db2f8f51f6d96a03ead562925214deeaf-640x800-webp',
            _type: 'reference',
          },
        },
      ],
      price: 599,
      slug: {
        _type: 'slug',
        current: 'ipad-air',
      },
      title: 'iPad Air',
      description:
        'The new iPad Air is blazing fast, portable, and packed with our most advanced technology, so you can do more than ever before.',
    },
  ],
  session: {
    user: {
      name: 'Doğucan Şaşıoğlu',
      email: 'sasiogludogucan@gmail.com',
      image:
        'https://lh3.googleusercontent.com/a/AItbvmk_K6r6brCf5h1y4Bp5NwUV7Jm03suM_1aEqQim=s96-c',
    },
    expires: '2023-10-18T22:55:34.544Z',
  },
  signIn,
  signOut,
};

export const mockHeaderIconsProps = {
  base,
};
