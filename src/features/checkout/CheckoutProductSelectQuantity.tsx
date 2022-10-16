import { setQuantity } from '@/store/basketSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export interface ICheckoutProductSelectQuantity {
  id: string;
  quantity: number;
}

export default function CheckoutProductSelectQuantity({
  quantity,
  id,
}: ICheckoutProductSelectQuantity) {
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);

  // Update quantity in basket and update total price in basket
  const handleSelectQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value);
    setSelectedQuantity(newQuantity);
    dispatch(setQuantity({ quantity: newQuantity, id }));
  };

  return (
    <select
      className="h-8 w-16 rounded-md border border-gray-300 bg-gray-100 text-center text-base"
      onChange={handleSelectQuantity}
      value={selectedQuantity}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  );
}
