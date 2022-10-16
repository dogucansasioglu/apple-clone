import FooterContainer from './FooterContainer';
import FooterLinks from './FooterLinks';
import FooterTitle from './FooterTitle';

export default function FooterShop() {
  const links = [
    { text: 'Offers', href: '#' },
    { text: 'Equal Store', href: '#' },
    { text: 'Where to Buy', href: '#' },
    { text: 'Online Show', href: '#' },
  ];

  return (
    <FooterContainer>
      <FooterTitle>Shop</FooterTitle>
      <FooterLinks links={links} />
    </FooterContainer>
  );
}
