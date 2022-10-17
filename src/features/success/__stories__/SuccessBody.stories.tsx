import { ComponentMeta, ComponentStory } from '@storybook/react';
import SuccessBody from '../SuccessBody';

export default {
  title: 'features/Success/SuccessBody',
  component: SuccessBody,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SuccessBody>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SuccessBody> = (args) => (
  <div className="max-w-xl bg-backdrop p-5">
    <SuccessBody />
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
