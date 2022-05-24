import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  fetchGetCurrentUser,
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
    try {
      return await fetchLogoutUser();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (_, thunkApi) => {
    const localToken = thunkApi.getState().auth.token;
    try {
      return await fetchCurrentUser(localToken);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
