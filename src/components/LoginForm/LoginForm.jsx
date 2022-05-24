import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';

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
    <form onSubmit={handeSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
