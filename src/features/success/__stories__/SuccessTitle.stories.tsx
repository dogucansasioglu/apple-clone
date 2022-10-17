import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SessionProvider } from 'next-auth/react';
import SuccessTitle from '../SuccessTitle';

export default {
  title: 'features/Success/SuccessTitle',
  component: SuccessTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SuccessTitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SuccessTitle> = (args) => (
  <SessionProvider>
    <div className="max-w-xl bg-backdrop p-5">
      <SuccessTitle />
    </div>
  </SessionProvider>
);

Template.parameters = {
  nextRouter: {
    query: {
      session_id: 'cs_test_123',
    },
  },
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
