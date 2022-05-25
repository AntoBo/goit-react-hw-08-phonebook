import Notification from 'components/Notification/Notification';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { errorSelector } from 'redux/status/statusSelectors';
import { resetError } from 'redux/status/statusSlice';

const ErrorPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(errorSelector);

  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, []);

  return (
    <div className="container">
      <Notification message={'Wasted... ' + error} />
    </div>
  );
  // return <p>ErrorPage content</p>;
};

export default ErrorPage;
