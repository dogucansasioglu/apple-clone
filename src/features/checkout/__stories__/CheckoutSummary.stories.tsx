import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckoutSummary from '../CheckoutSummary';

export default {
  title: 'features/checkout/CheckoutSummary',
  component: CheckoutSummary,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CheckoutSummary>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckoutSummary> = (args) => (
  <div className="bg-backdrop p-5">
    <CheckoutSummary />
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
