import { ComponentMeta, ComponentStory } from '@storybook/react';
import Basket from './Basket';

export default {
  title: 'templates/Basket',
  component: Basket,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Basket>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Basket> = () => <Basket />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
