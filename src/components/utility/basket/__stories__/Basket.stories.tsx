import { store } from '@/store/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Basket from '../Basket';

export default {
  title: 'Utility/Basket',
  component: Basket,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Basket>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Basket> = (args) => (
  <Provider store={store}>
    <Basket {...args} />
  </Provider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  isStorybook: true,
};
