import Notification from 'components/Notification/Notification';
import { useSelector } from 'react-redux';
import { errorSelector } from 'redux/status/statusSelectors';

const ErrorWrapper = ({ children }) => {
  const error = useSelector(errorSelector);
  console.log('error is ', error);
  return (
    <>
      {error ? <Notification message={'error occured. ' + error} /> : children}
    </>
  );
};

export default ErrorWrapper;
