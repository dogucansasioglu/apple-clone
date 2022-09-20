import {
  ChevronDownIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
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

  const handleMinus = (id: string) => {
    dispatch(minusBasket(id));
    toast.success(`${title} removed from basket!`, {
      position: 'bottom-center',
    });
  };

  const handlePlus = (id: string) => {
    dispatch(plusBasket(id));
    toast.success(`${title} added to basket!`, {
      position: 'bottom-center',
    });
  };

  return (
    <div className="flex-1 space-y-4">
      <div className="flex flex-row gap-x-8 text-xl md:text-2xl ">
        <h4 className="w-28 select-none font-medium md:w-60 lg:w-96">
          {title}
        </h4>
        <p className="flex-center gap-x-1 font-medium">
          <Button
            className="pmButton"
            disabled={length === 0 ? true : false}
            onClick={() => handlePlus(id)}
          >
            <PlusCircleIcon className="transition-300 h-6 w-6" />
          </Button>
          <span>{length}</span>
          <Button
            className="pmButton"
            disabled={length <= 1 ? true : false}
            onClick={() => handleMinus(id)}
          >
            <MinusCircleIcon className="transition-300 h-6 w-6" />
          </Button>
        </p>
      </div>

      <p className="transition-300 flex cursor-pointer select-none items-end text-blue-500 hover:text-blue-700">
        Show product details
        <ChevronDownIcon className="h-6 w-6" />
      </p>
    </div>
  );
};

export default ProductTitle;
