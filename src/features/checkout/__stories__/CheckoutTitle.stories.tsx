import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckoutTitle from '../CheckoutTitle';

export default {
  title: 'features/checkout/CheckoutTitle',
  component: CheckoutTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CheckoutTitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckoutTitle> = (args) => (
  <div className="bg-backdrop p-5">
    <CheckoutTitle {...args} />
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  length: 1,
};
