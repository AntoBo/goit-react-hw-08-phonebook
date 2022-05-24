import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';

const RegisterPage = () => {
  return (
    <div className="container">
      <h1>Register:</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
