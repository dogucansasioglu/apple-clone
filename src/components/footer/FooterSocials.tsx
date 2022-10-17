import { fadeYVariants } from '@/components/utility/motion/Variants';
import { m } from 'framer-motion';
import FooterSocial from './FooterSocial';

export default function FooterSocials() {
  return (
    <m.ul className="mx-0 flex gap-2" variants={fadeYVariants}>
      <FooterSocial src="/facebook.png" alt="facebook" />
      <FooterSocial src="/linkedin.png" alt="linkedin" />
      <FooterSocial src="/twitter.png" alt="twitter" />
      <FooterSocial src="/instagram.png" alt="instagram" />
    </m.ul>
  );
}
