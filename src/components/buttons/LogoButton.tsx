import Link from 'next/link';

export interface ILogoButton {
  location: 'header' | 'footer';
}

export default function LogoButton({ location }: ILogoButton) {
  const classes = location === 'header' ? 'text-3xl' : 'text-6xl';

  return (
    <Link href="/">
      <a
        className={`${classes} bg-logo bg-size-logo bg-clip-text bg-no-repeat font-bold text-transparent transition-all duration-500 ease-in-out hover:bg-size-logo-hover`}
      >
        Equal
      </a>
    </Link>
  );
}
