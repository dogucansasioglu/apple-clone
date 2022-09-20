import Image from 'next/image';
import Button from '../../buttons/Button';

const HomeHero = () => {
  return (
    <main className="relative h-[200vh]">
      <section className="sticky top-0 -translate-y-14 px-8">
        <div className="mx-auto flex h-screen max-w-7xl items-center justify-between gap-x-2 ">
          <div className="space-y-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="font-medium leading-[1.1] tracking-[-0.5px]">
                <span className="bg-gpv5 block bg-clip-text text-transparent">
                  Powered
                </span>
                By Intellect
                <br />
                Driven By Values
              </span>
            </h1>

            <div className="space-x-8">
              <Button classes="primaryButton">
                <span className="">Buy Now</span>
              </Button>
              <Button classes="link">
                <span>Learn More</span>
              </Button>
            </div>
          </div>
          <div className="relative hidden h-full w-2/4 transition-all duration-500 md:inline">
            <Image
              src="/iphone.png"
              layout="fill"
              objectFit="contain"
              priority
              alt="image of iPhone"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeHero;
