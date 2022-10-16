import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckoutButton from '../CheckoutButton';

export default {
  title: 'features/checkout/CheckoutButton',
  component: CheckoutButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CheckoutButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckoutButton> = (args) => (
  <div className="bg-backdrop p-5">
    <CheckoutButton />
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
