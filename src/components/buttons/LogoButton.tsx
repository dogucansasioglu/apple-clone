import Link from 'next/link';

export interface ILogoButton {
  location: 'header' | 'footer';
}

export default function LogoButton({ location }: ILogoButton) {
  const textSize = location === 'header' ? 'text-3xl' : 'text-6xl';

  return (
    <Link href="/">
      <a
        className={`${textSize} bg-primary bg-size-primary bg-clip-text bg-no-repeat font-bold text-transparent transition-all duration-300 ease-in hover:bg-primary-hover hover:bg-size-primary-hover`}
      >
        Equal
      </a>
    </Link>
  );
}
