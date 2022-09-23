import Image from 'next/future/image';

const FooterLogonSocials = () => {
  return (
    <div className="flex flex-col gap-5 text-center sm:text-left md:mr-5">
      <div className="space-y-7">
        <div className="relative h-12 w-12 xl:h-16 xl:w-16 mx-auto sm:mx-0">
          <Image
            src="/logo-white.png"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <p>Powered by Intellect</p>
          <p>Driven by Values</p>
        </div>
      </div>
      <div className="flex gap-2 mx-auto sm:mx-0">
        <div className="transition-all duration-300 ease-in-out flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-700 p-3 hover:bg-gray-500 lg:h-12 lg:w-12 lg:p-3.5">
          <div className="transition-all duration-300 ease-in-out relative h-5 w-5">
            <Image
              src="/facebook.png"
              alt="facebook"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="transition-all duration-300 ease-in-out flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-700 p-3 hover:bg-gray-500 lg:h-12 lg:w-12 lg:p-3.5">
          <div className="transition-all duration-300 ease-in-out relative h-5 w-5">
            <Image
              src="/linkedin.png"
              alt="linkedin"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="transition-all duration-300 ease-in-out flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-700 p-3 hover:bg-gray-500 lg:h-12 lg:w-12 lg:p-3.5">
          <div className="transition-all duration-300 ease-in-out relative h-5 w-5">
            <Image
              src="/twitter.png"
              alt="twitter"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="transition-all duration-300 ease-in-out flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-700 p-3 hover:bg-gray-500 lg:h-12 lg:w-12 lg:p-3.5">
          <div className="transition-all duration-300 ease-in-out relative h-5 w-5">
            <Image
              src="/instagram.png"
              alt="instagram"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLogonSocials;
