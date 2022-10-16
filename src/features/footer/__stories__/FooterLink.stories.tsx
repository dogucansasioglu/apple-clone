import { ComponentMeta, ComponentStory } from '@storybook/react';
import FooterLink, { IFooterLink } from '../FooterLink';

export default {
  title: 'features/Footer/FooterLink',
  component: FooterLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FooterLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FooterLink> = (args) => (
  <div className="bg-promo-dark p-5">
    <FooterLink {...args} />
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  href: '#',
  text: 'Link',
} as IFooterLink;
