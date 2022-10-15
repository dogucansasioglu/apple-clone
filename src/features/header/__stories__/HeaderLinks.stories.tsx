import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SessionProvider } from 'next-auth/react';
import HeaderLinks from '../HeaderLinks';

export default {
  title: 'features/Header/HeaderLinks',
  component: HeaderLinks,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeaderLinks>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderLinks> = (args) => (
  <SessionProvider session={null}>
    <HeaderLinks />
  </SessionProvider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
