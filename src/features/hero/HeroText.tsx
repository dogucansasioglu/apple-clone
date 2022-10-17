import { fadeYVariants } from '@/components/utility/motion/Variants';
import { m } from 'framer-motion';

export default function HeroText() {
  return (
    <m.h1
      className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
      variants={fadeYVariants}
    >
      <span className="font-semibold leading-[1.1] tracking-[-0.5px]">
        <span className="block bg-primary bg-size-gradient-bg bg-clip-text bg-no-repeat text-transparent">
          Powered
        </span>
        By Intellect
        <br />
        Driven By Values
      </span>
    </m.h1>
  );
}
