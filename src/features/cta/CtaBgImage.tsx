import { fadeYVariants } from '@/components/utility/motion/Variants';
import { m } from 'framer-motion';
import Image from 'next/future/image';

export default function CtaBgImage() {
  return (
    <m.div
      className="absolute top-0 z-10 h-full w-full brightness-50"
      variants={fadeYVariants}
    >
      <Image
        src="/cta.jpg"
        alt="call to action image"
        fill
        className="object-cover object-center"
      />
    </m.div>
  );
}
