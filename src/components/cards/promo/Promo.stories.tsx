import { Tab } from '@headlessui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PromoCard, { IPromoCard } from './Promo';
import { mockPromoCardProps } from './Promo.mocks';

export default {
  title: 'cards/PromoCard',
  component: PromoCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PromoCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PromoCard> = (args) => (
  <Tab.Group>
    <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
      <Tab.Panel className="tabPanel">
        <PromoCard {...args} />
      </Tab.Panel>
    </Tab.Panels>
  </Tab.Group>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPromoCardProps.base,
} as IPromoCard;
