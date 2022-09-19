import { ChevronDownIcon } from '@heroicons/react/24/outline';

export interface IProductTitle {
  title: string;
  length: number;
}

const ProductTitle = ({ title, length }: IProductTitle) => {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex flex-col gap-x-8 text-xl md:text-2xl lg:flex-row">
        <h4 className="font-medium lg:w-96">{title}</h4>
        <p className="flex cursor-pointer items-end gap-x-1 font-medium">
          {length}
          <ChevronDownIcon className="transition-300 h-6 w-6 text-blue-500 hover:text-blue-700" />
        </p>
      </div>

      <p className="transition-300 flex cursor-pointer items-end text-blue-500 hover:text-blue-700">
        Show product details
        <ChevronDownIcon className="h-6 w-6" />
      </p>
    </div>
  );
};

export default ProductTitle;
