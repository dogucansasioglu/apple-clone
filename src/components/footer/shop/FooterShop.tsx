const FooterShop = () => {
  return (
    <div className="flex flex-col text-center sm:text-left md:pl-5">
      <div>
        <h1 className="pb-4 text-2xl font-semibold text-gray-100 md:text-xl lg:text-2xl xl:text-3xl">
          Shop
        </h1>
        <ul className="space-y-4">
          <li className="transition-all duration-300 ease-in-out cursor-pointer hover:text-gray-500">
            Offers
          </li>
          <li className="transition-all duration-300 ease-in-out cursor-pointer hover:text-gray-500">
            Equal Store
          </li>
          <li className="transition-all duration-300 ease-in-out cursor-pointer hover:text-gray-500">
            Where to Buy
          </li>
          <li className="transition-all duration-300 ease-in-out cursor-pointer hover:text-gray-500">
            Online Show
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterShop;
