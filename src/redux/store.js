import authSlice from './auth/authSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    auth: authSlice,
    // contacts,
  },
});

export default store;
