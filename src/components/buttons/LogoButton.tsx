import { fadeYVariants } from '@/components/utility/motion/Variants';
import { m } from 'framer-motion';
import Link from 'next/link';

export interface ILogoButton {
  location: 'header' | 'footer';
  delay?: number;
}

export default function LogoButton({ location, delay = 0 }: ILogoButton) {
  const textSize = location === 'header' ? 'text-3xl' : 'text-6xl';

  return (
    <m.div variants={fadeYVariants}>
      <Link href="/">
        <a
          className={`${textSize} bg-primary bg-size-gradient-bg bg-clip-text bg-no-repeat font-bold text-transparent transition-all duration-300 ease-in hover:bg-primary-hover hover:bg-size-gradient-bg-hover`}
        >
          Equal
        </a>
      </Link>
    </m.div>
  );
}
