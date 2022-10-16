import Link from 'next/link';

export interface IFooterLink {
  text: string;
  href: string;
}

export default function FooterLink({ text, href }: IFooterLink) {
  return (
    <li className="w-fit cursor-pointer bg-footer-link bg-size-gradient-bg bg-clip-text bg-no-repeat text-transparent transition-all duration-300 ease-in hover:bg-footer-link-hover hover:bg-size-gradient-bg-hover">
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </li>
  );
}
