const FooterProduct = () => {
  return (
    <div className="flex flex-col text-center sm:text-left md:pl-5">
      <div>
        <h1 className="pb-4 text-2xl font-semibold text-gray-100 md:text-xl lg:text-2xl xl:text-3xl">
          Product & Service
        </h1>
        <ul className="space-y-4">
          <li className="cursor-pointer transition-all duration-300 ease-in hover:text-gray-500">
            Smartphones
          </li>
          <li className="cursor-pointer transition-all duration-300 ease-in hover:text-gray-500">
            Tablets
          </li>
          <li className="cursor-pointer transition-all duration-300 ease-in hover:text-gray-500">
            Audio Sound
          </li>
          <li className="cursor-pointer transition-all duration-300 ease-in hover:text-gray-500">
            Smart Switch
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterProduct;
