import { fadeYVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';

export default function CtaText() {
  return (
    <motion.h1
      className="text-xl font-semibold text-gray-50 sm:text-2xl md:text-3xl lg:text-4xl"
      variants={fadeYVariants}
    >
      Subscribe to our newsletter
    </motion.h1>
  );
}
