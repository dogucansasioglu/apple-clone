import Image from 'next/future/image';

export interface IFooterSocial {
  src: string;
  alt: string;
}

export default function FooterSocial({ src, alt }: IFooterSocial) {
  return (
    <li className="cursor-pointer rounded-full bg-footer-social bg-size-gradient-bg bg-no-repeat p-2.5 transition-all duration-300 ease-in hover:bg-footer-social-hover hover:bg-size-gradient-bg-hover">
      <Image src={src} alt={alt} width={20} height={20} />
    </li>
  );
}
