import { fadeYVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';

export default function PromoTitle() {
  return (
    <motion.h1
      className="text-center text-4xl font-medium tracking-wide text-white"
      variants={fadeYVariants}
    >
      New Promos
    </motion.h1>
  );
}
