import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLogged, getUserName } from 'redux/auth/authSelectors';
import s from './HomePage.module.scss';

const HomePage = () => {
  const isLogged = useSelector(getIsLogged);
  const userName = useSelector(getUserName);
  return isLogged ? (
    <div className="container">
      <h1>Welcome, {userName}. Proceed to contacts</h1>
      <NavLink className="buttonLink" to="/contacts">
        Contacts
      </NavLink>
    </div>
  ) : (
    <div className="container">
      <h1 className={s.title}>Create your own phone contacts collection!</h1>
    </div>
  );
};

export default HomePage;
