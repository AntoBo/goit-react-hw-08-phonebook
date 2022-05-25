import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import s from './UserMenu.module.scss';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className={s.wrap}>
      <button className="buttonLink" type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
