import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { updateUser } from 'redux/auth/authOperations';
import { getIsLogged, getToken } from 'redux/auth/authSelectors';

import ContactPage from './ContactPage/ContactPage';
import ErrorPage from './ErrorPage/ErrorPage';
import ErrorWrapper from './ErrorWrapper/ErrorWrapper';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import LoaderWrap from './LoaderWrap/LoaderWrap';

import LoginPage from './pages/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import RegisterForm from './RegisterForm/RegisterForm';
import RegisterPage from './RegisterPage/RegisterPage';

export const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(getIsLogged);
  const token = useSelector(getToken);

  useEffect(() => {
    isLogged && dispatch(updateUser(token));
  }, [dispatch]);
  return (
    <>
      <Header />
      <ErrorWrapper>
        <LoaderWrap>
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
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route path="/error" element={<ErrorPage />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </LoaderWrap>
      </ErrorWrapper>
    </>
  );
};
