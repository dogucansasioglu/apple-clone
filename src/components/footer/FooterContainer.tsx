import { containerVariants } from '@/components/utility/motion/Variants';
import { m } from 'framer-motion';

export interface IFooterContainer {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

export default function FooterContainer({
  children,
  className = '',
  padding = 'lg:pl-5',
}: IFooterContainer) {
  return (
    <m.div
      className={`flex flex-col text-xl ${padding} ${className}`}
      initial="out"
      whileInView="in"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {children}
    </m.div>
  );
}
