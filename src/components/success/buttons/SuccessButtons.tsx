import { useRouter } from 'next/router';
import Button from '../../buttons/Button';

const SuccessButtons = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between text-sm">
      <p className="font-medium text-gray-600">
        Need help?{' '}
        <Button className="text-blue-500 hover:text-blue-700">
          Contact us!
        </Button>
      </p>
      <Button onClick={() => router.push('/')} className="successButton">
        <span>Continue Shopping</span>
      </Button>
    </div>
  );
};

export default SuccessButtons;
