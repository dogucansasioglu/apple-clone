import { ComponentMeta, ComponentStory } from '@storybook/react';
import PromoCard, { IPromoCard } from './PrimaryLayout';
import { mockPromoCardProps } from './PrimaryLayout.mocks.';

export default {
  title: 'templates/PromoCard',
  component: PromoCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PromoCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PromoCard> = (args) => (
  <PromoCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPromoCardProps.base,
} as IPromoCard;
