import { NavLink } from 'react-router-dom';
import s from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div>
      <NavLink className={s.buttonLink} to="/login">
        Login
      </NavLink>
      <NavLink className={s.buttonLink} to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default NavBar;
