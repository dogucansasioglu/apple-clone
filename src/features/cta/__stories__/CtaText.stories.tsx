import { ComponentMeta, ComponentStory } from '@storybook/react';
import CtaText from '../CtaText';

export default {
  title: 'features/Cta/CtaText',
  component: CtaText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CtaText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CtaText> = (args) => <CtaText />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
