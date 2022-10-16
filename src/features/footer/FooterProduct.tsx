import FooterContainer from './FooterContainer';
import FooterLinks from './FooterLinks';
import FooterTitle from './FooterTitle';

export default function FooterProduct() {
  const links = [
    { text: 'Smartphones', href: '#' },
    { text: 'Tablets', href: '#' },
    { text: 'Audio Sound', href: '#' },
    { text: 'Smart Switch', href: '#' },
  ];

  return (
    <FooterContainer>
      <FooterTitle>Product & Service</FooterTitle>
      <FooterLinks links={links} />
    </FooterContainer>
  );
}
