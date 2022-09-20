export interface IButton {
  loading?: boolean;
  children?: React.ReactNode;
  classes?: string;
  onClick?: () => void;
}

const Button = ({ loading, classes, children, onClick }: IButton) => {
  return (
    <button
      className={`${classes}
         transition-300 cursor-pointer`}
      onClick={onClick}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
