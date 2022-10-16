import { ComponentMeta, ComponentStory } from '@storybook/react';
import Hero from '../Hero';

export default {
  title: 'features/Hero',
  component: Hero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Hero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hero> = (args) => (
  <div className="bg-backdrop">
    <Hero {...args} />
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  isStorybook: true,
};
