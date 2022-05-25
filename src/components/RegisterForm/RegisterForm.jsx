import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatePassword, setRepeatePassword] = useState('');

  const checkPasswordBeforeDispatch = () => {
    if (password !== repeatePassword) {
      alert('Input matching password');
      return;
    } else {
      dispatch(registerUser({ name, email, password }));
    }
  };

  const handeSubmit = e => {
    e.preventDefault();
    checkPasswordBeforeDispatch();
  };

  const changeHandler = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'repeatePassword':
        setRepeatePassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <form onSubmit={handeSubmit}>
      <label>
        Name:
        <input
          onChange={changeHandler}
          value={name}
          required
          type="text"
          name="name"
          autoComplete="off"
        />
      </label>
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
          name="password"
          autoComplete="off"
        />
      </label>
      <label>
        Repeat password:
        <input
          value={repeatePassword}
          onChange={changeHandler}
          required
          type="password"
          name="repeatePassword"
          autoComplete="off"
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
