import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchLoginUser,
  fetchLogoutUser,
  fetchRegisterUser,
} from 'utils/fetchApi';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (newUser, thunkApi) => {
    try {
      return await fetchRegisterUser(newUser);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, thunkApi) => {
    try {
      return await fetchLoginUser(userData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkApi) => {
    // const {
    //   auth: { token },
    // } = thunkApi.getState();
    try {
      return await fetchLogoutUser();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
