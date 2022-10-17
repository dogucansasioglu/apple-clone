import PrimaryButton from '@/components/buttons/PrimaryButton';
import { fadeYVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';

export default function CtaButton() {
  return (
    <motion.div variants={fadeYVariants}>
      <PrimaryButton className="rounded-lg px-5 py-2.5 text-base font-semibold text-white transition-all duration-300 ease-in hover:opacity-90 sm:px-6 sm:py-3 sm:text-lg md:px-10 md:py-4 xl:text-xl">
        Subscribe
      </PrimaryButton>
    </motion.div>
  );
}
