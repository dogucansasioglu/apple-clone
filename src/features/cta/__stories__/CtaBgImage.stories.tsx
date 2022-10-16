import { ComponentMeta, ComponentStory } from '@storybook/react';
import CtaBgImage from '../CtaBgImage';

export default {
  title: 'features/Cta/CtaBgImage',
  component: CtaBgImage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CtaBgImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CtaBgImage> = (args) => <CtaBgImage />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
