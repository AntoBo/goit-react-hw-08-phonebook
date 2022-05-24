import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

//user
export const fetchRegisterUser = async newUser => {
  const resp = await axios.post('/users/signup', newUser);
  setToken('Bearer ' + resp.data.token);
  return resp.data;
};

export const fetchLoginUser = async userData => {
  const resp = await axios.post('/users/login', userData);
  setToken('Bearer ' + resp.data.token);
  return resp.data;
};

export const fetchLogoutUser = async () => {
  const resp = await axios.post('/users/logout');
  setToken('');
  return resp.data;
};

export const fetchCurrentUser = async localToken => {
  // console.log('getting user...');
  // console.log(localToken);
  setToken('Bearer ' + localToken);
  const resp = await axios.get('/users/current');
  // console.log('got user!');
  // console.log(resp);
  return resp.data;
};

//contacts
export const fetchAllContacts = async () => {
  const res = await axios.get('/contacts');
  return res.data;
};

export const fetchDeleteContact = async id => {
  await axios.delete('/contacts/' + id);
  return id;
};

export const fetchEditContact = async contact => {
  const { id, email, name } = contact;
  await axios.delete('/contacts/' + id, { email, name });
  return id;
};

export const fetchAddContact = async contact => {
  const newContact = await axios.post('/contacts', contact);
  return newContact.data;
};
