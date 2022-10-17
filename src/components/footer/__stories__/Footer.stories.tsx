import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from '../Footer';

export default {
  title: 'components/Footer',
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => <Footer />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
