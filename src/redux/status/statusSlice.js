import {
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from 'redux/auth/authOperations';

const { createSlice } = require('@reduxjs/toolkit');

const statusSlice = createSlice({
  name: 'status',
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //reg
    [registerUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: state => {
      state.isLoading = false;
      state.error = null;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    //login
    [loginUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: state => {
      state.isLoading = false;
      state.error = null;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    //logout
    [logoutUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.fulfilled]: state => {
      state.isLoading = false;
      state.error = null;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    //upd
    [updateUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [updateUser.fulfilled]: state => {
      state.isLoading = false;
      state.error = null;
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default statusSlice.reducer;
