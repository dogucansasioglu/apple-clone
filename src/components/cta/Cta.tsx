import Button from '../buttons/Button';

const Cta = () => {
  return (
    <div className="mt-32 px-5">
      <div className="flex items-center justify-center mx-auto mt-10 h-full max-w-full flex-col gap-10 rounded-2xl bg-cta bg-cover bg-[center] bg-no-repeat py-12 px-6 text-white sm:gap-16 md:max-w-3xl md:p-16 lg:max-w-5xl  xl:max-w-7xl">
        <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Subscribe to our newsletter
        </h1>
        <label className="flex w-full cursor-text justify-between rounded-lg bg-white p-2 ring-1 ring-violet-500 sm:max-w-xl sm:p-2 md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
          <input
            className="w-3/4 rounded-lg px-3 py-2 text-base text-gray-800 outline-none sm:px-4 sm:py-3 sm:text-xl md:px-6 md:py-5"
            type="email"
            placeholder="Enter your email"
          />

          <Button className="transition-all duration-300 ease-in-out bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg px-5 py-2.5 text-base font-semibold text-white hover:opacity-90 sm:px-6 sm:py-3 sm:text-lg md:px-10 md:py-4 xl:text-xl">
            Subscribe
          </Button>
        </label>
      </div>
    </div>
  );
};

export default Cta;
