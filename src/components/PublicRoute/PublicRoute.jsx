import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getIsLogged } from 'redux/auth/authSelectors';

const PublicRoute = ({ children }) => {
  const isLogged = useSelector(getIsLogged);
  return !isLogged ? children : <Navigate to="/" />;
};

export default PublicRoute;
