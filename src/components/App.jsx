import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getIsLogged, getIsLoggedIn } from 'redux/auth/authSelectors';
import ContactPage from './ContactPage/ContactPage';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar/NavBar';
import LoginPage from './pages/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import RegisterForm from './RegisterForm/RegisterForm';
import UserMenu from './UserMenu/UserMenu';

export const App = () => {
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
