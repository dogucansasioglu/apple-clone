import PrimaryButton from '@/components/buttons/PrimaryButton';
import { fadeYVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';

export default function HeroBuyButton() {
  return (
    <motion.div variants={fadeYVariants}>
      <PrimaryButton className="px-8 py-3 text-lg font-semibold xl:px-10 xl:py-4 xl:text-xl">
        Buy Now
      </PrimaryButton>
    </motion.div>
  );
}
