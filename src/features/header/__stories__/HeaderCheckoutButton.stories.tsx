import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderCheckoutButton from '../HeaderCheckoutButton';

export default {
  title: 'features/Header/HeaderCheckoutButton',
  component: HeaderCheckoutButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeaderCheckoutButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderCheckoutButton> = (args) => (
  <HeaderCheckoutButton />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
