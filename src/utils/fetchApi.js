import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// const TOKEN = axios.defaults.headers.common['Authorization'];

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

export const fetchRegisterUser = async newUser => {
  const resp = await axios.post('/users/signup', newUser);
  setToken('Bearer ' + resp.data.token);
  return resp.data;
};

export const fetchLoginUser = async userData => {
  const resp = await axios.post('/users/login', userData);
  setToken('Bearer ' + resp.data.token);
  //   console.log('token is: ', axios.defaults.headers.common['Authorization']);
  return resp.data;
};

export const fetchLogoutUser = async () => {
  //   console.log('logging out...');
  //   console.log('token is: ', axios.defaults.headers.common['Authorization']);
  const resp = await axios.post('/users/logout');
  //   console.log('logging out done');

  setToken('');
  return resp.data;
};

export const fetchCurrentUser = async localToken => {
  console.log('getting user...');
  console.log(localToken);
  setToken('Bearer ' + localToken);
  const resp = await axios.get('/users/current');
  console.log('got user!');
  console.log(resp);
  return resp.data;
};

export const fetchAllContacts = async () => {};
export const fetchAddContact = async () => {};
export const fetchRemoveContact = async () => {};
