import SecondaryButton from '@/components/buttons/SecondaryButton';

export default function HeroLearnMoreButton() {
  return (
    <SecondaryButton
      className="bg-secondary text-lg font-semibold hover:bg-secondary-hover xl:text-xl"
      borderClassName="pb-0.5"
    >
      Learn more
    </SecondaryButton>
  );
}
