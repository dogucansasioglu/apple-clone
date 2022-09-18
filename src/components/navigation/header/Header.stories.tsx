import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SessionProvider } from 'next-auth/react';
import Header from './Header';

const session = {
  expires: '2023-10-01T12:00:00.000Z',
  user: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    image: 'https://links.papareact.com/ua6',
  },
  accessToken: 'someaccesstoken',
  idToken: 'someidtoken',
};

export default {
  title: 'navigation/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = () => (
  <SessionProvider session={session}>
    <Header />
  </SessionProvider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
