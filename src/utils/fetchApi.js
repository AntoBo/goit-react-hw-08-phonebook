import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchRegisterUser = async newUser => {
  const resp = await axios.post('/users/signup', newUser, {});
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + resp.data.token;
  return resp.data;
};

export const fetchLoginUser = async userData => {
  const resp = await axios.post('/users/login', userData);
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + resp.data.token;
  return resp.data;
};

export const fetchLogoutUser = async () => {
  const resp = await axios.post('/users/logout');
  axios.defaults.headers.common['Authorization'] = '';
  return resp.data;
};

export const fetchGetCurrentUser = async () => {};

export const fetchGetAllContacts = async () => {};
export const fetchAddContact = async () => {};
export const fetchRemoveContact = async () => {};
