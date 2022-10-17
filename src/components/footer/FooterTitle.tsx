import { fadeYVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';

export interface IFooterTitle {
  children: React.ReactNode;
}

export default function FooterTitle({ children }: IFooterTitle) {
  return (
    <motion.h1
      className="pb-4 text-2xl font-semibold text-gray-100 xl:text-3xl"
      variants={fadeYVariants}
    >
      {children}
    </motion.h1>
  );
}
