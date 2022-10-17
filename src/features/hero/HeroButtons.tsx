import HeroBuyButton from './HeroBuyButton';
import HeroLearnMoreButton from './HeroLearnMoreButton';

export default function HeroButtons() {
  return (
    <div className="flex items-center  space-x-8">
      <HeroBuyButton />
      <HeroLearnMoreButton />
    </div>
  );
}
