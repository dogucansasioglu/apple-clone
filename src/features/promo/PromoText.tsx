export interface IPromoText {
  title: string;
  price: number;
}

export default function PromoText({ title, price }: IPromoText) {
  if (!title || !price) return null;

  return (
    <div className="space-y-2 text-lg text-gray-50 sm:text-xl md:text-2xl">
      <div className="font-medium">{title}</div>
      <div>${price}</div>
    </div>
  );
}
