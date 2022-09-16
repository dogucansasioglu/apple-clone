import { selectBasketItems } from "../store/basketSlice";
import { useSelector } from "react-redux";
import Link from "next/link";
import ShoppingBagIcon from "@heroicons/react/24/outline/ShoppingBagIcon";

const Basket = () => {
  const items = useSelector(selectBasketItems);

  if (items.length === 0) return null;

  return (
    <Link href="/checkout">
      <div className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300">
        {items.length > 0 && (
          <span className="bg-gradient-pink-violet absolute -right-1 -top-1 z-50 flex h-7 w-7 items-center justify-center rounded-full text-sm text-white">
            {items.length}
          </span>
        )}
        <ShoppingBagIcon className="h-8 w-8" />
      </div>
    </Link>
  );
};

export default Basket;
