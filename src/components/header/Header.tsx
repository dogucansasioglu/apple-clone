import LogoButton from '@/components/buttons/LogoButton';
import { containerVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';
import HeaderLinks from './HeaderLinks';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex-initial bg-backdrop p-5">
      <motion.nav
        className="container mx-auto flex items-center justify-between"
        initial="out"
        animate="in"
        variants={containerVariants}
      >
        <LogoButton location="header" />
        <HeaderLinks />
      </motion.nav>
    </header>
  );
}
