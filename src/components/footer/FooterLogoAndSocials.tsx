import FooterContainer from './FooterContainer';
import FooterLogo from './FooterLogo';
import FooterSocials from './FooterSocials';

export default function FooterLogoAndSocials() {
  return (
    <FooterContainer className="gap-5" padding="">
      <FooterLogo />
      <FooterSocials />
    </FooterContainer>
  );
}
