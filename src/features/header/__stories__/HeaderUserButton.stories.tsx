import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SessionProvider } from 'next-auth/react';
import HeaderUserButton from '../HeaderUserButton';

export default {
  title: 'features/Header/HeaderUserButton',
  component: HeaderUserButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeaderUserButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderUserButton> = (args) => (
  <SessionProvider session={null}>
    <HeaderUserButton />
  </SessionProvider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
