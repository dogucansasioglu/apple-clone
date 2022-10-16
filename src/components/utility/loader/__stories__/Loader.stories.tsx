import { ComponentMeta, ComponentStory } from '@storybook/react';
import Loader, { ILoader } from '../Loader';

export default {
  title: 'Utility/Loader',
  component: Loader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Loader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loader> = (args) => (
  <div className="bg-promo-dark p-5">
    <Loader {...args} />
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  isStorybook: true,
} as ILoader;
