export interface IFooterTitle {
  children: React.ReactNode;
}

export default function FooterTitle({ children }: IFooterTitle) {
  return (
    <h1 className="pb-4 text-2xl font-semibold text-gray-100 xl:text-3xl">
      {children}
    </h1>
  );
}
