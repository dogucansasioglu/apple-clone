import Image from 'next/future/image';
import Button from '../../buttons/Button';

const HomeHero = () => {
  return (
    <main className="relative h-[200vh]">
      <section className="sticky top-0 -translate-y-14 px-8">
        <div className="mx-auto flex h-screen max-w-7xl items-center justify-between gap-x-2 ">
          <div className="space-y-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="font-medium leading-[1.1] tracking-[-0.5px]">
                <span className="bg-gradient-to-r from-pink-500 to-violet-500 block bg-clip-text text-transparent">
                  Powered
                </span>
                By Intellect
                <br />
                Driven By Values
              </span>
            </h1>

            <div className="space-x-8">
              <Button className="transition-all duration-300 ease-in-out bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg px-6 py-3 text-lg font-semibold text-white hover:opacity-90 md:px-8 md:py-4 xl:text-xl">
                <span className="">Buy Now</span>
              </Button>
              <Button className="relative cursor-pointer text-lg font-medium before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-black before:transition-all before:duration-200 before:ease-in-out hover:before:scale-x-100 xl:text-xl">
                <span>Learn More</span>
              </Button>
            </div>
          </div>
          <div className="relative hidden h-full w-2/4 md:inline">
            <Image
              src="/iphone.png"
              priority
              alt="image of iPhone"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeHero;
