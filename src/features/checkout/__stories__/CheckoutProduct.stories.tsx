import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckoutProduct, { ICheckoutProduct } from '../CheckoutProduct';

export default {
  title: 'features/checkout/CheckoutProduct',
  component: CheckoutProduct,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CheckoutProduct>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckoutProduct> = (args) => (
  <div className="bg-backdrop p-10">
    <CheckoutProduct {...args} />
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  item: {
    product: {
      _createdAt: '2022-09-15T15:51:51Z',
      _id: '0f4cd93f-fd16-4f69-899f-959e10483773',
      _rev: '7QRoBHgb4U1Nb3n6kZG8dW',
      _type: 'product',
      _updatedAt: '2022-09-22T14:51:51Z',
      category: {
        _ref: '382389ea-cfd8-437d-9598-b0f1c1110c92',
        _type: 'reference',
      },
      image: {
        _ref: 'image-5e6a079440735eaa9ebe25a4c3c99018af55f29c-640x800-webp',
        lqip: 'data:image/png;base64,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',
      },
      price: 499,
      slug: {
        _type: 'slug',
        current: 'ipad-mini',
      },
      title: 'iPad mini',
    },
    quantity: 1,
  },
} as ICheckoutProduct;
