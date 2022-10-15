export interface IPrimaryButton {
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function PrimaryButton({
  loading,
  className,
  children,
  onClick,
  disabled,
}: IPrimaryButton) {
  return (
    <button
      className={`${className}
       cursor-pointer rounded-lg bg-primary bg-size-primary bg-no-repeat text-white transition-all duration-300 ease-in hover:bg-primary-hover hover:bg-size-primary-hover`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
