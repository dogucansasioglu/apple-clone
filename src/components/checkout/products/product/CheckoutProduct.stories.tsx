import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckoutProduct, { ICheckoutProduct } from './CheckoutProduct';
import { mockCheckoutProductProps } from './CheckoutProduct.mocks';

export default {
  title: 'checkout/products/CheckoutProduct',
  component: CheckoutProduct,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CheckoutProduct>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckoutProduct> = (args) => (
  <CheckoutProduct {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCheckoutProductProps.base,
} as ICheckoutProduct;
