import Notification from 'components/Notification/Notification';
import { useSelector } from 'react-redux';
import { errorSelector } from 'redux/status/statusSelectors';

const ErrorPage = () => {
  //   const error = useSelector(errorSelector);

  //   return <Notification message={'Wasted... ' + error} />;
  return <p>ErrorPage content</p>;
};

export default ErrorPage;
