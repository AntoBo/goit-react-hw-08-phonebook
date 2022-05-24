import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getIsLogged } from 'redux/auth/authSelectors';

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(getIsLogged);
  return isLogged ? children : <Navigate to="/" />;
};

export default PrivateRoute;
