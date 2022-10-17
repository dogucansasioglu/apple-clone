import LogoButton from '@/components/buttons/LogoButton';
import { fadeYVariants } from '@/components/utility/motion/Variants';
import { m } from 'framer-motion';

export default function FooterLogo() {
  return (
    <div className="space-y-7">
      <LogoButton location="footer" />
      <m.div variants={fadeYVariants}>
        <div>
          <p>Powered by Intellect</p>
          <p>Driven by Values</p>
        </div>
      </m.div>
    </div>
  );
}
