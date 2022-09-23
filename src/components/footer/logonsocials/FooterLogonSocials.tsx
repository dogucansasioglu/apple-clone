import Image from 'next/future/image';

const FooterLogonSocials = () => {
  return (
    <div className="flex flex-col gap-5 text-center sm:text-left md:mr-5">
      <div className="space-y-7">
        <div className="footer-logo mx-auto sm:mx-0">
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
      <div className="footer-socials mx-auto sm:mx-0">
        <div className="footer-social-container">
          <div className="footer-social">
            <Image
              src="/facebook.png"
              alt="facebook"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="footer-social-container">
          <div className="footer-social">
            <Image
              src="/linkedin.png"
              alt="linkedin"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="footer-social-container">
          <div className="footer-social">
            <Image
              src="/twitter.png"
              alt="twitter"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="footer-social-container">
          <div className="footer-social">
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
