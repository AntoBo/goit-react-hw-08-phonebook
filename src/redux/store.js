import authSlice from './auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth/authSlice';
const { configureStore } = require('@reduxjs/toolkit');

const authPersistConfig = {
  key: 'token',
  version: 1,
  storage,
  whitelist: ['token', 'user'],
};

const authPersistedReducer = persistReducer(authPersistConfig, auth);

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    // auth: authSlice,
    // contacts,
  },
});
export const persistor = persistStore(store);
