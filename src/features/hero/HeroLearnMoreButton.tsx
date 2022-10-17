import SecondaryButton from '@/components/buttons/SecondaryButton';
import { fadeYVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';

export default function HeroLearnMoreButton() {
  return (
    <motion.div variants={fadeYVariants}>
      <SecondaryButton
        className="bg-secondary text-lg font-semibold hover:bg-secondary-hover xl:text-xl"
        borderClassName="pb-0.5"
      >
        Learn more
      </SecondaryButton>
    </motion.div>
  );
}
