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
import contactsSlice from './contacts/contactsSlice';
import statusSlice from './status/statusSlice';
const { configureStore } = require('@reduxjs/toolkit');

const authPersistConfig = {
  key: 'token',
  version: 1,
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(authPersistConfig, auth);

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    status: statusSlice,
    auth: authPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: false,
});
export const persistor = persistStore(store);
