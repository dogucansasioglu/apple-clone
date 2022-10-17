import Link from 'next/link';
import SecondaryButton from '../buttons/SecondaryButton';

export interface IFooterLink {
  text: string;
  href: string;
}

export default function FooterLink({ text, href }: IFooterLink) {
  return (
    <li className="w-fit">
      <SecondaryButton
        withBorder={false}
        className="bg-footer-link hover:bg-footer-link-hover"
      >
        <Link href={href}>
          <a>{text}</a>
        </Link>
      </SecondaryButton>
    </li>
  );
}
