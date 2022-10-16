import FooterSocial from './FooterSocial';

export default function FooterSocials() {
  return (
    <ul className="mx-0 flex gap-2">
      <FooterSocial src="/facebook.png" alt="facebook" />
      <FooterSocial src="/linkedin.png" alt="linkedin" />
      <FooterSocial src="/twitter.png" alt="twitter" />
      <FooterSocial src="/instagram.png" alt="instagram" />
    </ul>
  );
}
