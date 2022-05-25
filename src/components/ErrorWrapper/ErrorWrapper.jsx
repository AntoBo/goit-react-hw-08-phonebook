import Notification from 'components/Notification/Notification';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { errorSelector } from 'redux/status/statusSelectors';

const ErrorWrapper = ({ children }) => {
  const location = useLocation();
  //   console.log(location);
  const error = useSelector(errorSelector);
  //   console.log('error is ', error);
  useEffect(() => {
    // if(location.path){}
    console.log(location.pathname);
  }, [location]);

  return <>{error ? <Navigate to="/error" /> : children}</>;
};

export default ErrorWrapper;
