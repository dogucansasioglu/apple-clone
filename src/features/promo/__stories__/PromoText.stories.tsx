import { ComponentMeta, ComponentStory } from '@storybook/react';
import PromoText, { IPromoText } from '../PromoText';

export default {
  title: 'features/Promo/PromoText',
  component: PromoText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PromoText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PromoText> = (args) => (
  <PromoText {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  price: 100,
  title: 'features/Promo/PromoText',
} as IPromoText;
