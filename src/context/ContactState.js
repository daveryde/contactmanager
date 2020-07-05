import React, { createContext, useReducer } from 'react';
import ContactReducer from './ContactReducer';
import axios from 'axios';

const initialState = {
  contacts: [],
  error: null
};

export const ContactContext = createContext(initialState);

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Get contacts
  const getContacts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({ type: 'GET_CONTACTS', payload: res.data });
  }

  // Add contact

  // Update contact

  // Delete contact

  return (
    <ContactContext.Provider value={{
      contacts: state.contacts,
      getContacts
    }}>
      {children}
    </ContactContext.Provider>
  );
}