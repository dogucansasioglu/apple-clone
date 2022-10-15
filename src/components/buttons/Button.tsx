export interface IButton {
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  loading,
  className,
  children,
  onClick,
  disabled,
}: IButton) => {
  return (
    <button
      className={`${className}
         cursor-pointer transition-all duration-300 ease-in`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
