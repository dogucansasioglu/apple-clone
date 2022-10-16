import { ComponentMeta, ComponentStory } from '@storybook/react';
import CtaButton from '../CtaButton';

export default {
  title: 'features/Cta/CtaButton',
  component: CtaButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CtaButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CtaButton> = (args) => <CtaButton />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
