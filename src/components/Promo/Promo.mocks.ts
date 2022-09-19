import { IPromo } from './Promo';

const base: IPromo = {
  categories: [
    {
      _createdAt: '2022-09-14T21:43:58Z',
      _id: '382389ea-cfd8-437d-9598-b0f1c1110c92',
      _rev: 'u9maGu4Yn6y5wrt8IgmboJ',
      _type: 'category',
      _updatedAt: '2022-09-14T21:43:58Z',
      slug: {
        _type: 'slug',
        current: 'ipad',
      },
      title: 'iPad',
    },
    {
      _createdAt: '2022-09-14T21:43:37Z',
      _id: 'a7fd308d-282a-44d0-bb82-3a43001170c9',
      _rev: 'ElPIeN5GV71YJ1OCqgEawH',
      _type: 'category',
      _updatedAt: '2022-09-14T21:43:37Z',
      slug: {
        _type: 'slug',
        current: 'apple-watch',
      },
      title: 'Apple Watch',
    },
    {
      _createdAt: '2022-09-14T21:44:08Z',
      _id: 'a90d0c7a-f547-479f-9a2a-05b4a383e608',
      _rev: 'u9maGu4Yn6y5wrt8Igmc4J',
      _type: 'category',
      _updatedAt: '2022-09-14T21:44:08Z',
      slug: {
        _type: 'slug',
        current: 'iphone',
      },
      title: 'iPhone',
    },
    {
      _createdAt: '2022-09-14T21:43:47Z',
      _id: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
      _rev: 'ElPIeN5GV71YJ1OCqgEbZf',
      _type: 'category',
      _updatedAt: '2022-09-14T21:43:47Z',
      slug: {
        _type: 'slug',
        current: 'mac',
      },
      title: 'Mac',
    },
  ],
  products: [
    {
      _createdAt: '2022-09-15T15:32:18Z',
      _id: '15238484-cbe7-4d20-9f09-676a9e4c34dd',
      _rev: 'lC9kKFrqWLq43LJkcls2As',
      _type: 'product',
      _updatedAt: '2022-09-15T15:33:18Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: [
        {
          _key: '5302bea36ed5',
          _type: 'image',
          asset: {
            _ref: 'image-94db346e4f3d9bd41bc9ee902d141492d25bb45f-600x500-webp',
            _type: 'reference',
          },
        },
      ],
      price: 999,
      slug: {
        _type: 'slug',
        current: 'macbook-air-with-m1-chip',
      },
      title: 'Macbook Air with M1 Chip',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:33:01Z',
      _id: 'be62f55a-4148-4825-9263-ae4b11d5a660',
      _rev: 'ulIlB3C1ybMcX1KsIxZ0Dt',
      _type: 'product',
      _updatedAt: '2022-09-15T15:33:53Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: [
        {
          _key: '21105882cee8',
          _type: 'image',
          asset: {
            _ref: 'image-130c04a9b9a3f25552c77e44398055622a3972f6-1200x1000-webp',
            _type: 'reference',
          },
        },
      ],
      price: 1199,
      slug: {
        _type: 'slug',
        current: 'macbook-air-with-m2-chip',
      },
      title: 'Macbook Air with M2 Chip',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:34:29Z',
      _id: 'ee17fd28-3588-4afc-b480-17cc8055f71e',
      _rev: 'ulIlB3C1ybMcX1KsIxZ5Cx',
      _type: 'product',
      _updatedAt: '2022-09-15T15:34:29Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: [
        {
          _key: '6e32a445ff2d',
          _type: 'image',
          asset: {
            _ref: 'image-11ef283f663146b87bc0a1054f7821af6047c208-600x500-webp',
            _type: 'reference',
          },
        },
      ],
      price: 1299,
      slug: {
        _type: 'slug',
        current: 'macbook-pro-13',
      },
      title: 'Macbook Pro 13"',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:35:06Z',
      _id: 'faf394f0-96cd-4147-a261-b61f9f5c3865',
      _rev: 'lC9kKFrqWLq43LJkclsGP1',
      _type: 'product',
      _updatedAt: '2022-09-15T15:35:06Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: [
        {
          _key: '0ab3eed00e77',
          _type: 'image',
          asset: {
            _ref: 'image-f397a2ae9880f755a9f7379b40708570ad00cdf7-490x500-webp',
            _type: 'reference',
          },
        },
      ],
      price: 1299,
      slug: {
        _type: 'slug',
        current: 'imac-24',
      },
      title: 'iMac 24"',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:35:48Z',
      _id: '3cc77884-da3b-4859-8212-038c5e5dd467',
      _rev: 'V8j1sAVPS4nQELn4eTpdH9',
      _type: 'product',
      _updatedAt: '2022-09-15T15:35:48Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: [
        {
          _key: '3e86ee13577f',
          _type: 'image',
          asset: {
            _ref: 'image-44d9259d208bb13d6b43e60c71f45380bb47287e-400x500-webp',
            _type: 'reference',
          },
        },
      ],
      price: 699,
      slug: {
        _type: 'slug',
        current: 'mac-mini',
      },
      title: 'Mac mini',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:36:27Z',
      _id: '38b6b903-5463-4e95-8aad-76a905c5bce8',
      _rev: 'ulIlB3C1ybMcX1KsIxZID7',
      _type: 'product',
      _updatedAt: '2022-09-15T15:36:27Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: [
        {
          _key: 'c023292f153c',
          _type: 'image',
          asset: {
            _ref: 'image-842b1105ccf1dd945f0cbc1b3cc6547001c8d562-400x500-webp',
            _type: 'reference',
          },
        },
      ],
      price: 1999,
      slug: {
        _type: 'slug',
        current: 'mac-studio',
      },
      title: 'Mac Studio',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:37:07Z',
      _id: '0e9d753f-1d41-4cfc-bd19-1ec94239e3ba',
      _rev: 'V8j1sAVPS4nQELn4eTphbr',
      _type: 'product',
      _updatedAt: '2022-09-15T15:37:07Z',
      category: {
        _ref: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
        _type: 'reference',
      },
      image: [
        {
          _key: 'bc4bae987173',
          _type: 'image',
          asset: {
            _ref: 'image-b121778d6f9fe6d635c14d34ce64c214b1ecec86-400x500-webp',
            _type: 'reference',
          },
        },
      ],
      price: 1599,
      slug: {
        _type: 'slug',
        current: 'studio-display',
      },
      title: 'Studio Display',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:37:54Z',
      _id: '061f3a87-45cd-43ee-86a8-ece168a70722',
      _rev: 'ulIlB3C1ybMcX1KsIxZOrv',
      _type: 'product',
      _updatedAt: '2022-09-15T15:37:54Z',
      category: {
        _ref: 'a90d0c7a-f547-479f-9a2a-05b4a383e608',
        _type: 'reference',
      },
      image: [
        {
          _key: 'dd642a1c2930',
          _type: 'image',
          asset: {
            _ref: 'image-646e7d9d1a339c9807a0633cf405efdc952bce20-640x497-webp',
            _type: 'reference',
          },
        },
      ],
      price: 999,
      slug: {
        _type: 'slug',
        current: 'iphone-13-pro',
      },
      title: 'iPhone 13 Pro',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:38:42Z',
      _id: '2ed3ef2e-6442-43f6-81cc-d28fa0ec1a79',
      _rev: 'ulIlB3C1ybMcX1KsIxZTmf',
      _type: 'product',
      _updatedAt: '2022-09-15T15:38:42Z',
      category: {
        _ref: 'a90d0c7a-f547-479f-9a2a-05b4a383e608',
        _type: 'reference',
      },
      image: [
        {
          _key: '634442934f41',
          _type: 'image',
          asset: {
            _ref: 'image-d0d1c15e7b7d7ea8b75443eefa6a488ef513651b-640x497-webp',
            _type: 'reference',
          },
        },
      ],
      price: 699,
      slug: {
        _type: 'slug',
        current: 'iphone-13',
      },
      title: 'iPhone 13',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:39:29Z',
      _id: '356a5c49-638d-4dca-8ab1-028cb522528d',
      _rev: 'lC9kKFrqWLq43LJkclsift',
      _type: 'product',
      _updatedAt: '2022-09-15T15:39:29Z',
      category: {
        _ref: 'a90d0c7a-f547-479f-9a2a-05b4a383e608',
        _type: 'reference',
      },
      image: [
        {
          _key: 'ed81c33108e1',
          _type: 'image',
          asset: {
            _ref: 'image-17a37299e66e80daa810ee3532a325e67d8a1e67-640x497-webp',
            _type: 'reference',
          },
        },
      ],
      price: 429,
      slug: {
        _type: 'slug',
        current: 'iphone-se',
      },
      title: 'iPhone SE',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:45:06Z',
      _id: '5d8be14b-4a60-4649-aeed-0fb2490d3961',
      _rev: 'lC9kKFrqWLq43LJkcltL7g',
      _type: 'product',
      _updatedAt: '2022-09-15T15:45:06Z',
      category: {
        _ref: 'a90d0c7a-f547-479f-9a2a-05b4a383e608',
        _type: 'reference',
      },
      image: [
        {
          _key: '205d0228d536',
          _type: 'image',
          asset: {
            _ref: 'image-4f8ccbf995ef145cd2035d6cc78eb9e82ad28a51-640x497-webp',
            _type: 'reference',
          },
        },
      ],
      price: 599,
      slug: {
        _type: 'slug',
        current: 'iphone-12',
      },
      title: 'iPhone 12',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:45:47Z',
      _id: 'b29b6711-c2c5-4ca4-aa1a-f5e47297088d',
      _rev: 'ulIlB3C1ybMcX1KsIxaQAp',
      _type: 'product',
      _updatedAt: '2022-09-15T15:45:47Z',
      category: {
        _ref: 'a90d0c7a-f547-479f-9a2a-05b4a383e608',
        _type: 'reference',
      },
      image: [
        {
          _key: '620f9e6b8269',
          _type: 'image',
          asset: {
            _ref: 'image-ad6982aa2321c2528172c6360ed9230dd0b8d45e-640x497-webp',
            _type: 'reference',
          },
        },
      ],
      price: 499,
      slug: {
        _type: 'slug',
        current: 'iphone-11',
      },
      title: 'iPhone 11',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:46:44Z',
      _id: 'e6c0c625-dbdc-4aef-a288-ef8c19d01a17',
      _rev: 'ulIlB3C1ybMcX1KsIxbFNl',
      _type: 'product',
      _updatedAt: '2022-09-15T15:46:44Z',
      category: {
        _ref: 'a7fd308d-282a-44d0-bb82-3a43001170c9',
        _type: 'reference',
      },
      image: [
        {
          _key: '0238df894f77',
          _type: 'image',
          asset: {
            _ref: 'image-7fa91437667669305fd7f96be7da64d01b6da4d5-640x497-webp',
            _type: 'reference',
          },
        },
      ],
      price: 399,
      slug: {
        _type: 'slug',
        current: 'apple-watch-series-7',
      },
      title: 'Apple Watch Series 7',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:47:40Z',
      _id: '3ab02032-4423-4453-8c27-ab7103cd2c95',
      _rev: 'lC9kKFrqWLq43LJkclw5XR',
      _type: 'product',
      _updatedAt: '2022-09-15T15:47:40Z',
      category: {
        _ref: 'a7fd308d-282a-44d0-bb82-3a43001170c9',
        _type: 'reference',
      },
      image: [
        {
          _key: '2f96724e4447',
          _type: 'image',
          asset: {
            _ref: 'image-1c920eabe02878c27ee899a47630d89889a6a70b-640x497-webp',
            _type: 'reference',
          },
        },
      ],
      price: 279,
      slug: {
        _type: 'slug',
        current: 'apple-watch-se',
      },
      title: 'Apple Watch SE',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:48:13Z',
      _id: '6278129e-2754-4919-a457-4d16a09f461f',
      _rev: 'V8j1sAVPS4nQELn4eTr5hr',
      _type: 'product',
      _updatedAt: '2022-09-15T15:48:13Z',
      category: {
        _ref: 'a7fd308d-282a-44d0-bb82-3a43001170c9',
        _type: 'reference',
      },
      image: [
        {
          _key: 'd3d83b3b3865',
          _type: 'image',
          asset: {
            _ref: 'image-04499f0934f9967f3c40427c60f6dd12fee379d0-640x497-webp',
            _type: 'reference',
          },
        },
      ],
      price: 199,
      slug: {
        _type: 'slug',
        current: 'apple-watch-series-3',
      },
      title: 'Apple Watch Series 3',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:48:47Z',
      _id: '1b55aad1-2f49-4810-ba6a-a507005848b5',
      _rev: 'ulIlB3C1ybMcX1KsIxcKf3',
      _type: 'product',
      _updatedAt: '2022-09-15T15:48:47Z',
      category: {
        _ref: 'a7fd308d-282a-44d0-bb82-3a43001170c9',
        _type: 'reference',
      },
      image: [
        {
          _key: '2e8644bf4264',
          _type: 'image',
          asset: {
            _ref: 'image-aadb16d84ec4ac4d204ef38eb01935b67b814420-640x497-webp',
            _type: 'reference',
          },
        },
      ],
      price: 399,
      slug: {
        _type: 'slug',
        current: 'apple-watch-nike',
      },
      title: 'Apple Watch Nike',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
      _createdAt: '2022-09-15T15:49:27Z',
      _id: 'ab334b36-4c6a-4be5-8bb4-8fb4cbeee437',
      _rev: 'lC9kKFrqWLq43LJkclwI6o',
      _type: 'product',
      _updatedAt: '2022-09-15T15:49:27Z',
      category: {
        _ref: 'a7fd308d-282a-44d0-bb82-3a43001170c9',
        _type: 'reference',
      },
      image: [
        {
          _key: '866b7d5f883c',
          _type: 'image',
          asset: {
            _ref: 'image-caac8b4078aced19c20b07ad3db9f9d349126c85-640x497-webp',
            _type: 'reference',
          },
        },
      ],
      price: 1229,
      slug: {
        _type: 'slug',
        current: 'apple-watch-hermes',
      },
      title: 'Apple Watch Hermès',
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
    {
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
      description: 'The new iPad mini is a powerful A15 Bionic chip',
    },
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
        'The new iPad mini is a powerful A15 Bionic chip, a 12MP Ultra Wide camera, support for Apple Pencil, and the new Magic Keyboard.',
    },
    {
      _createdAt: '2022-09-15T15:51:26Z',
      _id: '6621d635-17b4-4520-989a-cb03f60e3fae',
      _rev: 'V8j1sAVPS4nQELn4eTrD8V',
      _type: 'product',
      _updatedAt: '2022-09-15T15:51:26Z',
      category: {
        _ref: '382389ea-cfd8-437d-9598-b0f1c1110c92',
        _type: 'reference',
      },
      image: [
        {
          _key: '00b555271d05',
          _type: 'image',
          asset: {
            _ref: 'image-ed3149100d376ab408b3fc275792efaca1e2db9d-640x800-webp',
            _type: 'reference',
          },
        },
      ],
      price: 329,
      slug: {
        _type: 'slug',
        current: 'ipad',
      },
      title: 'iPad',
      description:
        'The new iPad mini is a powerful A15 Bionic chip, a 12MP Ultra Wide camera, support for Apple Pencil, and the new Magic Keyboard.',
    },
    {
      _createdAt: '2022-09-15T15:51:51Z',
      _id: '0f4cd93f-fd16-4f69-899f-959e10483773',
      _rev: 'lC9kKFrqWLq43LJkclwYMZ',
      _type: 'product',
      _updatedAt: '2022-09-15T15:51:51Z',
      category: {
        _ref: '382389ea-cfd8-437d-9598-b0f1c1110c92',
        _type: 'reference',
      },
      image: [
        {
          _key: '3c6c72a0fd29',
          _type: 'image',
          asset: {
            _ref: 'image-5e6a079440735eaa9ebe25a4c3c99018af55f29c-640x800-webp',
            _type: 'reference',
          },
        },
      ],
      price: 499,
      description:
        'The new iPad mini is a powerful A15 Bionic chip, a 12MP Ultra Wide camera, support for Apple Pencil, and the new Magic Keyboard.',
      slug: {
        _type: 'slug',
        current: 'ipad-mini',
      },
      title: 'iPad mini',
    },
  ],
};

export const mockPromoProps = {
  base,
};
