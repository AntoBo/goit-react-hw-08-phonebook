import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterForm from './RegisterForm/RegisterForm';
import UserMenu from './UserMenu/UserMenu';

export const App = () => {
  //temprorary!
  const [isLogged, setIsLogged] = useState(true);

  return (
    <>
      <Header>{isLogged ? <UserMenu /> : <NavBar />}</Header>
      <Routes>
        {isLogged ? (
          <>
            <Route path="/contacts" element={<h1>Contacts</h1>} />
            <Route path="/*" element={<Navigate to="/contacts" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
};
