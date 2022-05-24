import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLogged } from 'redux/auth/authSelectors';

const HomePage = () => {
  const isLogged = useSelector(getIsLogged);
  return isLogged ? (
    <>
      <h1>Proceed to contacts</h1>
      <NavLink to="/contacts">Contacts</NavLink>
    </>
  ) : (
    <h1>Create your own phone contacts collection</h1>
  );
};

export default HomePage;
