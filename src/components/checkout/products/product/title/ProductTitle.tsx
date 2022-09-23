import {
  ChevronDownIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { minusBasket, plusBasket } from '../../../../../store/basketSlice';
import Button from '../../../../buttons/Button';

export interface IProductTitle {
  title: string;
  length: number;
  id: string;
}

const ProductTitle = ({ title, length, id }: IProductTitle) => {
  const dispatch = useDispatch();

  const handleMinusPlus = async (id: string, type: 'plus' | 'minus') => {
    let toastMsg: string;
    const toast = (await import('react-hot-toast')).default;
    if (type === 'plus') {
      dispatch(plusBasket(id));
      toastMsg = `${title} added to bag!`;
    } else {
      dispatch(minusBasket(id));
      toastMsg = `${title} removed from bag!`;
    }
    toast.success(toastMsg, {
      position: 'bottom-center',
    });
  };

  return (
    <div className="flex-1 space-y-4">
      <div className="flex flex-row gap-x-8 text-xl md:text-2xl ">
        <h4 className="w-28 select-none font-medium md:w-60 lg:w-96">
          {title}
        </h4>
        <p className="flex items-center justify-center gap-x-1 font-medium">
          <Button
            className="cursor-pointer text-blue-500 hover:text-blue-700 disabled:cursor-not-allowed disabled:text-blue-200"
            disabled={length === 0 ? true : false}
            onClick={() => handleMinusPlus(id, 'plus')}
          >
            <PlusCircleIcon className="transition-all duration-300 ease-in-out h-6 w-6" />
          </Button>
          <span>{length}</span>
          <Button
            className="cursor-pointer text-blue-500 hover:text-blue-700 disabled:cursor-not-allowed disabled:text-blue-200"
            disabled={length <= 1 ? true : false}
            onClick={() => handleMinusPlus(id, 'minus')}
          >
            <MinusCircleIcon className="transition-all duration-300 ease-in-out h-6 w-6" />
          </Button>
        </p>
      </div>

      <p className="transition-all duration-300 ease-in-out flex cursor-pointer select-none items-end text-blue-500 hover:text-blue-700">
        Show product details
        <ChevronDownIcon className="h-6 w-6" />
      </p>
    </div>
  );
};

export default ProductTitle;
