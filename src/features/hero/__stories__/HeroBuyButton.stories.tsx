import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroBuyButton from '../HeroBuyButton';

export default {
  title: 'features/Hero/HeroBuyButton',
  component: HeroBuyButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeroBuyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroBuyButton> = (args) => (
  <div className="bg-backdrop p-5">
    <HeroBuyButton />
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
