import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { updateUser } from 'redux/auth/authOperations';
import { getIsLogged, getToken } from 'redux/auth/authSelectors';

import ContactPage from './ContactPage/ContactPage';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';

import LoginPage from './pages/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import RegisterForm from './RegisterForm/RegisterForm';

export const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(getIsLogged);
  const token = useSelector(getToken);
  // console.log('token in App ', token);

  useEffect(() => {
    isLogged && dispatch(updateUser(token));
  }, [isLogged, dispatch, token]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterForm />
            </PublicRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
