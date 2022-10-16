import { Tab } from '@headlessui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PromoCategories, { IPromoCategories } from '../PromoCategories';

export default {
  title: 'features/Promo/PromoCategories',
  component: PromoCategories,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PromoCategories>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PromoCategories> = (args) => (
  <Tab.Group>
    <Tab.List className="flex justify-center bg-promo-dark p-5">
      <PromoCategories {...args} />
    </Tab.List>
  </Tab.Group>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  categories: [
    {
      _createdAt: '2022-09-14T21:43:58Z',
      _id: '382389ea-cfd8-437d-9598-b0f1c1110c92',
      _rev: 'u9maGu4Yn6y5wrt8IgmboJ',
      _type: 'category',
      _updatedAt: '2022-09-14T21:43:58Z',
      slug: {
        _type: 'slug',
        current: 'ipad',
      },
      title: 'iPad',
    },
    {
      _createdAt: '2022-09-14T21:43:37Z',
      _id: 'a7fd308d-282a-44d0-bb82-3a43001170c9',
      _rev: 'ElPIeN5GV71YJ1OCqgEawH',
      _type: 'category',
      _updatedAt: '2022-09-14T21:43:37Z',
      slug: {
        _type: 'slug',
        current: 'apple-watch',
      },
      title: 'Apple Watch',
    },
    {
      _createdAt: '2022-09-14T21:44:08Z',
      _id: 'a90d0c7a-f547-479f-9a2a-05b4a383e608',
      _rev: 'u9maGu4Yn6y5wrt8Igmc4J',
      _type: 'category',
      _updatedAt: '2022-09-14T21:44:08Z',
      slug: {
        _type: 'slug',
        current: 'iphone',
      },
      title: 'iPhone',
    },
    {
      _createdAt: '2022-09-14T21:43:47Z',
      _id: 'ebd18a33-80f1-4cfa-8e74-1dc9d8f0fa4a',
      _rev: 'ElPIeN5GV71YJ1OCqgEbZf',
      _type: 'category',
      _updatedAt: '2022-09-14T21:43:47Z',
      slug: {
        _type: 'slug',
        current: 'mac',
      },
      title: 'Mac',
    },
  ],
} as IPromoCategories;
