interface Props {
  classes?: string;
  children: JSX.Element;
  onClick?: () => void;
  loading?: boolean;
}

const Button = ({ classes, children, onClick, loading }: Props) => {
  return (
    <button className={`${classes || ''} cursor-pointer`} onClick={onClick}>
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
