import FooterLogoAndSocials from './FooterLogoAndSocials';
import FooterProduct from './FooterProduct';
import FooterShop from './FooterShop';
import FooterSupport from './FooterSupport';

export default function Footer() {
  return (
    <>
      <div className="mt-32 bg-promo-dark px-5 py-20 lg:py-32">
        <nav className="container mx-auto grid grid-cols-1 gap-y-10 text-gray-400 sm:grid-cols-2 lg:grid-cols-4 ">
          <FooterLogoAndSocials />
          <FooterProduct />
          <FooterShop />
          <FooterSupport />
        </nav>
      </div>
    </>
  );
}
