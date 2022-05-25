import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';

import s from './LoginForm.module.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handeSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const changeHandler = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handeSubmit} className={s.form}>
      <label>
        Email:
        <input
          value={email}
          onChange={changeHandler}
          required
          type="email"
          name="email"
          autoComplete="off"
        />
      </label>
      <label>
        Password:
        <input
          value={password}
          onChange={changeHandler}
          required
          type="password"
          autoComplete="off"
          name="password"
        />
      </label>
      <button className="buttonLink" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
