export interface IFooterContainer {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

export default function FooterContainer({
  children,
  className = '',
  padding = 'lg:pl-5',
}: IFooterContainer) {
  return (
    <div className={`flex flex-col text-xl ${padding} ${className}`}>
      {children}
    </div>
  );
}
