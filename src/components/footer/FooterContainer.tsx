export interface IFooterContainer {
  children: React.ReactNode;
  className?: string;
}

export default function FooterContainer({
  children,
  className = '',
}: IFooterContainer) {
  return (
    <div className={`flex flex-col text-xl lg:pl-5 ${className}`}>
      {children}
    </div>
  );
}
