import LogoButton from '@/components/buttons/LogoButton';
import { fadeYVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';

export default function FooterLogo() {
  return (
    <div className="space-y-7">
      <LogoButton location="footer" />
      <motion.div variants={fadeYVariants}>
        <div>
          <p>Powered by Intellect</p>
          <p>Driven by Values</p>
        </div>
      </motion.div>
    </div>
  );
}
