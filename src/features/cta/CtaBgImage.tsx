import Image from 'next/future/image';

export default function CtaBgImage() {
  return (
    <div className="absolute top-0 z-10 h-full w-full brightness-50">
      <Image
        src="/cta.jpg"
        alt="call to action image"
        fill
        className="object-cover object-center"
      />
    </div>
  );
}
