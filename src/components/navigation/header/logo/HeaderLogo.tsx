import Image from 'next/future/image';
import Link from 'next/link';

const HeaderLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link href="/">
        <div className="transition-all duration-300 ease-in-out relative h-12 w-7 cursor-pointer opacity-80 hover:opacity-100">
          <Image
            src="/logo.png"
            fill
            className="object-contain"
            alt="apple clone logo"
          />
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
