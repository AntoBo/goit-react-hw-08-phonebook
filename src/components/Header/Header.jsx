import NavBar from 'components/NavBar/NavBar';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLogged } from 'redux/auth/authSelectors';

const Header = () => {
  const isLogged = useSelector(getIsLogged);

  return (
    <div>
      <NavLink to="/">LOGO</NavLink>
      {isLogged ? <UserMenu /> : <NavBar />}
    </div>
  );
};

export default Header;
