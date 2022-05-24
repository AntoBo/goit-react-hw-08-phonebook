import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    console.log('handleLogout');
  };
  return (
    <div>
      <span>user@mail.com</span>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
