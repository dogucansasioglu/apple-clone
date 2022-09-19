import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../../../../../store/basketSlice';

export interface IProductRemove {
  id: string;
  title: string;
  price: number;
}

const ProductRemove = ({ id, title, price }: IProductRemove) => {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id));

    toast.error(`${title} removed from basket`, {
      position: 'bottom-center',
    });
  };

  return (
    <div className="flex flex-col items-end space-y-4">
      <h4 className="text-xl font-medium md:text-2xl">${price}</h4>
      <button
        onClick={removeItemFromBasket}
        className="transition-300 text-blue-500 hover:text-blue-700"
      >
        Remove
      </button>
    </div>
  );
};

export default ProductRemove;
