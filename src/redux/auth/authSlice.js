import {
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from './authOperations';

const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: { name: '', email: '' },
  },
  redusers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [loginUser.fulfilled]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [logoutUser.fulfilled]: state => {
      state.token = null;
      state.user = { name: '', email: '' };
    },
    [updateUser.fulfilled]: (state, { payload }) => ({
      ...state,
      user: { ...payload },
    }),
  },
});

export default authSlice.reducer;
