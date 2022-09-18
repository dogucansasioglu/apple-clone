import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderIcons, { IHeaderIcons } from './HeaderIcons';
import { mockHeaderIconsProps } from './HeaderIcons.mocks';

// TODO: add story for HeaderIcons

export default {
  title: 'navigation/Header/HeaderIcons',
  component: HeaderIcons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeaderIcons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderIcons> = (args) => (
  <HeaderIcons {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeaderIconsProps.base,
} as IHeaderIcons;
