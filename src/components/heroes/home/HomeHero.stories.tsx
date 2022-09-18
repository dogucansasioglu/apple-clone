import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomeHero from './HomeHero';

export default {
  title: 'heroes/HomeHero',
  component: HomeHero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HomeHero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomeHero> = () => <HomeHero />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
