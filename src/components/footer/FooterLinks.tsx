import FooterLink, { IFooterLink } from './FooterLink';

export interface IFooterLinks {
  links: IFooterLink[];
}

export default function FooterLinks({ links }: IFooterLinks) {
  return (
    <ul className="space-y-4">
      {links.map((link, index) => (
        <FooterLink {...link} key={index} />
      ))}
    </ul>
  );
}
