import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAddContact,
  fetchAllContacts,
  fetchDeleteContact,
} from 'utils/fetchApi';

export const getContacts = createAsyncThunk(
  'getContacts',
  async (_, { rejectWithValue }) => {
    try {
      console.log('try to get contacts');
      const contacts = await fetchAllContacts();
      console.log('got contacts :', contacts);

      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContact',
  async (contact, { rejectWithValue }) => {
    try {
      console.log('try to get contact');
      const newContact = await fetchAddContact(contact);
      console.log('newContact returned obj ', newContact);
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      console.log('try to del contact');
      await fetchDeleteContact(id);
      console.log('contact deleted, id ', id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const editContact = createAsyncThunk(
//   'deleteContact',
//   async (contact, { rejectWithValue }) => {
//     try {
//       await fetchDeleteContact(contact);
//       return contact.id;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
