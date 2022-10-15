import HeaderCheckoutButton from './HeaderCheckoutButton';
import HeaderUserButton from './HeaderUserButton';

const HeaderIcons = () => {
  return (
    <div className="flex items-center justify-center gap-x-5">
      <HeaderCheckoutButton />

      <HeaderUserButton />
    </div>
  );
};

export default HeaderIcons;
