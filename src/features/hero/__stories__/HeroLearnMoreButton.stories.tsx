import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroLearnMoreButton from '../HeroLearnMoreButton';

export default {
  title: 'features/Hero/HeroLearnMoreButton',
  component: HeroLearnMoreButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeroLearnMoreButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroLearnMoreButton> = (args) => (
  <HeroLearnMoreButton />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
