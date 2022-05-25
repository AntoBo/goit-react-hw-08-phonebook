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
      const contacts = await fetchAllContacts();

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
      const newContact = await fetchAddContact(contact);
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
      await fetchDeleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
