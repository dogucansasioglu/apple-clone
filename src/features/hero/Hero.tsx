import { containerVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';
import HeroButtons from './HeroButtons';
import HeroImage from './HeroImage';
import HeroText from './HeroText';

export default function Hero() {
  return (
    <main className="relative h-[200vh] px-5">
      <div className="-translate-y-14">
        <motion.div
          initial="out"
          animate="in"
          variants={containerVariants}
          className="container sticky top-0 mx-auto grid h-screen grid-cols-1 items-center gap-5 md:grid-cols-2"
        >
          <div className="space-y-10">
            <HeroText />
            <HeroButtons />
          </div>
          <HeroImage />
        </motion.div>
      </div>
    </main>
  );
}
