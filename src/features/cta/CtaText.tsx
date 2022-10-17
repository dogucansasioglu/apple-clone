import { fadeYVariants } from '@/components/utility/motion/Variants';
import { m } from 'framer-motion';

export default function CtaText() {
  return (
    <m.h1
      className="text-xl font-semibold text-gray-50 sm:text-2xl md:text-3xl lg:text-4xl"
      variants={fadeYVariants}
    >
      Subscribe to our newsletter
    </m.h1>
  );
}
