import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../../../../../store/basketSlice';
import Button from '../../../../buttons/Button';

export interface IProductRemove {
  id: string;
  title: string;
  price: number;
}

const ProductRemove = ({ id, title, price }: IProductRemove) => {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id));

    toast.success(`${title} removed from basket`, {
      position: 'bottom-center',
    });
  };

  return (
    <div className="flex flex-col items-end space-y-4">
      <h4 className="select-none text-xl font-medium md:text-2xl">${price}</h4>
      <Button
        onClick={removeItemFromBasket}
        className="transition-300 select-none text-blue-500 hover:text-blue-700"
      >
        Remove
      </Button>
    </div>
  );
};

export default ProductRemove;
