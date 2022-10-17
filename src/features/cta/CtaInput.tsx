import { fadeYVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';

export default function CtaInput() {
  return (
    <motion.input
      variants={fadeYVariants}
      className="w-3/4 rounded-lg px-3 py-2 text-base text-gray-800 outline-none sm:px-4 sm:py-3 sm:text-xl md:px-6 md:py-5"
      type="email"
      placeholder="Enter your email"
    />
  );
}
