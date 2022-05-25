import Notification from 'components/Notification/Notification';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { errorSelector } from 'redux/status/statusSelectors';

const ErrorWrapper = ({ children }) => {
  const error = useSelector(errorSelector);
  const navigate = useNavigate();

  useEffect(() => {
    error && navigate('/error');
  }, [error]);

  return <>{children}</>;
};

export default ErrorWrapper;
