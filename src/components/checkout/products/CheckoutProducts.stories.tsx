import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckoutProducts from './CheckoutProducts';

export default {
  title: 'checkout/products/CheckoutProducts',
  component: CheckoutProducts,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CheckoutProducts>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckoutProducts> = () => (
  <CheckoutProducts />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
