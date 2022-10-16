import FooterContainer from './FooterContainer';
import FooterLinks from './FooterLinks';
import FooterTitle from './FooterTitle';

export default function FooterSupport() {
  const links = [
    { text: 'Email Support', href: '#' },
    { text: 'WhatsApp', href: '#' },
    { text: 'Live Chat', href: '#' },
    { text: 'Phone Support', href: '#' },
  ];

  return (
    <FooterContainer>
      <FooterTitle>Support</FooterTitle>
      <FooterLinks links={links} />
    </FooterContainer>
  );
}
