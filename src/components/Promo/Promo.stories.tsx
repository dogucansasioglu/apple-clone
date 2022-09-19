import { ComponentMeta, ComponentStory } from '@storybook/react';
import Promo, { IPromo } from './Promo';
import { mockPromoProps } from './Promo.mocks';

export default {
  title: 'promo/Promo',
  component: Promo,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Promo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Promo> = (args) => <Promo {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPromoProps.base,
} as IPromo;
