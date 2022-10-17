import { ComponentMeta, ComponentStory } from '@storybook/react';
import SuccessButtons from '../SuccessButtons';

export default {
  title: 'features/Success/SuccessButtons',
  component: SuccessButtons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SuccessButtons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SuccessButtons> = (args) => (
  <div className="max-w-xl bg-backdrop p-5">
    <SuccessButtons />
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
