import { fadeYVariants } from '@/components/utility/motion/Variants';
import { m } from 'framer-motion';

export default function PromoTitle() {
  return (
    <m.h1
      className="text-center text-4xl font-medium tracking-wide text-white"
      variants={fadeYVariants}
    >
      New Promos
    </m.h1>
  );
}
