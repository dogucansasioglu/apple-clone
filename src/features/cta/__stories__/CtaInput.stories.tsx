import { ComponentMeta, ComponentStory } from '@storybook/react';
import CtaInput from '../CtaInput';

export default {
  title: 'features/Cta/CtaInput',
  component: CtaInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CtaInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CtaInput> = (args) => <CtaInput />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
