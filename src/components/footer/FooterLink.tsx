import SecondaryButton from '@/components/buttons/SecondaryButton';
import { fadeYVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface IFooterLink {
  text: string;
  href: string;
}

export default function FooterLink({ text, href }: IFooterLink) {
  return (
    <motion.li className="w-fit" variants={fadeYVariants}>
      <SecondaryButton
        withBorder={false}
        className="bg-footer-link hover:bg-footer-link-hover"
      >
        <Link href={href}>
          <a>{text}</a>
        </Link>
      </SecondaryButton>
    </motion.li>
  );
}
