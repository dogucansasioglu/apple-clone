import { ComponentMeta, ComponentStory } from '@storybook/react';
import Cta from '../Cta';

export default {
  title: 'features/Cta',
  component: Cta,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Cta>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Cta> = (args) => <Cta />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
