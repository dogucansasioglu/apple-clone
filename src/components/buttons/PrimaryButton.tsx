export interface IPrimaryButton {
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  rounded?: string;
  group?: string;
}

export default function PrimaryButton({
  loading,
  className,
  children,
  onClick,
  disabled,
  rounded = 'rounded-lg',
  group = '',
}: IPrimaryButton) {
  return (
    <button
      className={`${className} ${rounded}
       cursor-pointer bg-primary bg-size-gradient-bg bg-no-repeat text-white transition-all duration-300 ease-in ${group}hover:bg-primary-hover ${group}hover:bg-size-gradient-bg-hover`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
