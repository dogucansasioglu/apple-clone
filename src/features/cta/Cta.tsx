import { containerVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';
import CtaBgImage from './CtaBgImage';
import CtaButton from './CtaButton';
import CtaInput from './CtaInput';
import CtaText from './CtaText';

export default function Cta() {
  return (
    <motion.div
      className="mt-32 px-5"
      initial="out"
      whileInView="in"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="relative mx-auto mt-10 flex h-full flex-col items-center justify-center overflow-hidden rounded-lg py-12 px-6 text-white sm:container md:p-16 lg:max-w-7xl">
        <CtaBgImage />
        <div className="z-20 flex w-full flex-col items-center gap-10 sm:gap-16">
          <CtaText />
          <label className="flex w-full cursor-text items-center justify-between rounded-lg bg-white p-2 ring-2 ring-violet-400 sm:p-2 lg:w-3/4 xl:w-1/2">
            <CtaInput />
            <CtaButton />
          </label>
        </div>
      </div>
    </motion.div>
  );
}
