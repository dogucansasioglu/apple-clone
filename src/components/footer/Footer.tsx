import FooterLogonSocials from './logonsocials/FooterLogonSocials';
import FooterProduct from './product/FooterService';
import FooterShop from './shop/FooterShop';
import FooterSupport from './support/FooterSupport';

const Footer = () => {
  return (
    <div className="bg-promo-dark px-3 py-20 sm:py-40">
      <div className="footer-text mx-auto grid max-w-xl grid-cols-1 grid-rows-1 gap-y-12 px-4 text-gray-400 sm:grid-cols-2 sm:grid-rows-2 md:max-w-7xl md:grid-cols-4 md:grid-rows-1">
        <FooterLogonSocials />

        {/* Product and Service */}
        <FooterProduct />
        <FooterShop />
        <FooterSupport />
      </div>
    </div>
  );
};

export default Footer;
