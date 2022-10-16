import { ComponentMeta, ComponentStory } from '@storybook/react';
import FooterSocials from '../FooterSocials';

export default {
  title: 'features/Footer/FooterSocials',
  component: FooterSocials,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FooterSocials>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FooterSocials> = (args) => (
  <div className="bg-promo-dark p-5">
    <FooterSocials />
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
