import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../../../store/basketSlice';
import CheckoutProduct from './product/CheckoutProduct';

interface GroupedItems {
  [key: string]: Product[];
}

const CheckoutProducts = () => {
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as GroupedItems
  );

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      if (results[item._id]) {
        results[item._id].push(item);
      } else {
        results[item._id] = [item];
      }
      return results;
    }, {} as GroupedItems);

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <>
      {Object.entries(groupedItemsInBasket).map(([key, items]) => (
        <CheckoutProduct key={key} items={items} id={key} />
      ))}
    </>
  );
};

export default CheckoutProducts;
