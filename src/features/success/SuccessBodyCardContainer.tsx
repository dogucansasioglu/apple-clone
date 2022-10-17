export interface ISuccessBodyCardContainer {
  children: React.ReactNode;
  className?: string;
}

export default function SuccessBodyCardContainer({
  className = '',
  children,
}: ISuccessBodyCardContainer) {
  return (
    <div className={`${className} rounded-md border border-gray-300 p-4`}>
      {children}
    </div>
  );
}
