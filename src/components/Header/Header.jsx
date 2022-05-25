import NavBar from 'components/NavBar/NavBar';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLogged } from 'redux/auth/authSelectors';
import logo from '../../assets/logo.png';

import s from './Header.module.scss';

const Header = () => {
  const isLogged = useSelector(getIsLogged);

  return (
    <header className={s.header}>
      <NavLink to="/">
        <img className={s.logo} width="50" src={logo} alt="phone book" />
      </NavLink>
      {isLogged ? <UserMenu /> : <NavBar />}
    </header>
  );
};

export default Header;
