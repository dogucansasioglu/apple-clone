import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import PrimaryLayout, { IPrimaryLayout } from './PrimaryLayout';
import { mockPrimaryLayoutProps } from './PrimaryLayout.mocks.';

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
  title: 'templates/PrimaryLayout',
  component: PrimaryLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PrimaryLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrimaryLayout> = (args) => (
  <SessionProvider session={session}>
    <Provider store={store}>
      <PrimaryLayout {...args} />
    </Provider>
  </SessionProvider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPrimaryLayoutProps.base,
} as IPrimaryLayout;
