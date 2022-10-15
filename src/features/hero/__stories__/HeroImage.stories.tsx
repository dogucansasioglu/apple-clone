import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroImage from '../HeroImage';

export default {
  title: 'features/Hero/HeroImage',
  component: HeroImage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeroImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroImage> = (args) => <HeroImage />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args