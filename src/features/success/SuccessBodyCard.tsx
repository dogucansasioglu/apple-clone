import { fadeYVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';

export interface ISuccessBodyCard {
  title: string;
  description: string;
  className?: string;
}

export default function SuccessBodyCard({
  title,
  description,
  className = '',
}: ISuccessBodyCard) {
  return (
    <motion.div className={className} variants={fadeYVariants}>
      <h2 className="font-medium">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}
