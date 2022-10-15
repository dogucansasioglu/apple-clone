import Image from 'next/future/image';

const FooterLogonSocials = () => {
  return (
    <div className="flex flex-col gap-5 text-center sm:text-left md:mr-5">
      <div className="space-y-7">
        <div className="relative mx-auto h-12 w-12 sm:mx-0 xl:h-16 xl:w-16">
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
      <div className="mx-auto flex gap-2 sm:mx-0">
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-700 p-3 transition-all duration-300 ease-in hover:bg-gray-500 lg:h-12 lg:w-12 lg:p-3.5">
          <div className="relative h-5 w-5 transition-all duration-300 ease-in">
            <Image
              src="/facebook.png"
              alt="facebook"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-700 p-3 transition-all duration-300 ease-in hover:bg-gray-500 lg:h-12 lg:w-12 lg:p-3.5">
          <div className="relative h-5 w-5 transition-all duration-300 ease-in">
            <Image
              src="/linkedin.png"
              alt="linkedin"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-700 p-3 transition-all duration-300 ease-in hover:bg-gray-500 lg:h-12 lg:w-12 lg:p-3.5">
          <div className="relative h-5 w-5 transition-all duration-300 ease-in">
            <Image
              src="/twitter.png"
              alt="twitter"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-700 p-3 transition-all duration-300 ease-in hover:bg-gray-500 lg:h-12 lg:w-12 lg:p-3.5">
          <div className="relative h-5 w-5 transition-all duration-300 ease-in">
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
