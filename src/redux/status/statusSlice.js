import {
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from 'redux/auth/authOperations';
import {
  addContact,
  getContacts,
  removeContact,
} from 'redux/contacts/contactsOperations';

const { createSlice } = require('@reduxjs/toolkit');

const statusSlice = createSlice({
  name: 'status',
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //user
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
    //contacts
    //get
    [getContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getContacts.fulfilled]: state => {
      state.isLoading = false;
      state.error = null;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    //add
    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: state => {
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    //remove
    [removeContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [removeContact.fulfilled]: state => {
      state.isLoading = false;
      state.error = null;
    },
    [removeContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default statusSlice.reducer;
