import { ThreeDots } from 'react-loader-spinner';
// import { Bars } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from 'redux/status/statusSelectors';

const LoaderWrap = ({ children }) => {
  const showLoader = useSelector(isLoadingSelector);
  return (
    <>
      {children}
      {showLoader && (
        <div className="loader">
          <ThreeDots height="40" width="40" color="grey" ariaLabel="loading" />
        </div>
      )}
    </>
  );
};

export default LoaderWrap;
