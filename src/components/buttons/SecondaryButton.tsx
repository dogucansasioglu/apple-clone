export interface ISecondaryButton {
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
  borderClassName?: string;
  onClick?: () => void;
  disabled?: boolean;
  withBorder?: boolean;
}

export default function SecondaryButton({
  loading,
  className = '',
  borderClassName = '',
  children,
  onClick,
  disabled = false,
  withBorder = true,
}: ISecondaryButton) {
  return (
    <button
      className={`${
        withBorder &&
        borderClassName &&
        ' bg-secondary-border bg-size-border bg-left-bottom bg-no-repeat transition-all duration-300 ease-in hover:bg-size-border-hover'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={`${className} bg-secondary bg-size-gradient-bg bg-clip-text bg-no-repeat text-transparent transition-all duration-300 ease-in hover:bg-secondary-hover hover:bg-size-gradient-bg-hover`}
      >
        {loading ? 'Loading...' : children}
      </span>
    </button>
  );
}
