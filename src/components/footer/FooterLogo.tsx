import LogoButton from '@/components/buttons/LogoButton';

export default function FooterLogo() {
  return (
    <div className="space-y-7">
      <LogoButton location="footer" />
      <div>
        <p>Powered by Intellect</p>
        <p>Driven by Values</p>
      </div>
    </div>
  );
}
