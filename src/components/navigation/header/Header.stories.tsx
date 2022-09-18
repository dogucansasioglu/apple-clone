import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SessionProvider } from 'next-auth/react';
import Header from './Header';

const session = {
  user: {
    name: 'Doğucan Şaşıoğlu',
    email: 'sasiogludogucan@gmail.com',
    image:
      'https://lh3.googleusercontent.com/a/AItbvmk_K6r6brCf5h1y4Bp5NwUV7Jm03suM_1aEqQim=s96-c',
  },
  expires: '2023-10-18T22:55:34.544Z',
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
