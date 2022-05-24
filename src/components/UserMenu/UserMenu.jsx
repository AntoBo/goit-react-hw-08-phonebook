import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);
  // const userName = useSelector(state => state.auth.user.name);
  // console.log(userName);

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <span>Welcome, {userName}</span>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
