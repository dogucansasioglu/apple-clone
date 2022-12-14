import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import { fadeYVariants } from '@/components/utility/motion/Variants';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function SuccessButtons() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between text-sm">
      <motion.p variants={fadeYVariants}>
        Need help?{' '}
        <SecondaryButton
          withBorder={true}
          className="bg-secondary font-medium hover:bg-secondary-hover"
        >
          Contact us!
        </SecondaryButton>
      </motion.p>

      <motion.div variants={fadeYVariants}>
        <PrimaryButton
          onClick={() => router.push('/')}
          className="px-6 py-3.5 text-sm font-semibold"
        >
          <span>Continue Shopping</span>
        </PrimaryButton>
      </motion.div>
    </div>
  );
}
