export interface IPromoCard {
  sampleTextProp: string;
}

const PromoCard = ({ sampleTextProp }: IPromoCard) => {
  return (
    <div>
      <h1>{sampleTextProp}</h1>
    </div>
  );
};

export default PromoCard;
