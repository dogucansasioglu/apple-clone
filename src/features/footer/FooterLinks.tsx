import FooterLink, { IFooterLink } from './FooterLink';

export interface IFooterLinks {
  links: IFooterLink[];
}

export default function FooterLinks({ links }: IFooterLinks) {
  return (
    <ol className="space-y-4">
      {links.map((link, index) => (
        <FooterLink key={index} {...link} />
      ))}
    </ol>
  );
}
