import React, { createContext, useEffect, useReducer } from 'react';
import ContactReducer from './ContactReducer';
import axios from 'axios';

const initialState = {
  contacts: [],
  errors: null
};

export const ContactContext = createContext(initialState);

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Get contacts on render
  useEffect(() => {
    getContacts();
  }, [])

  // Get contacts
  const getContacts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({ type: 'GET_CONTACTS', payload: res.data });
  }

  // Add contact
  const addContact = async (contact) => {
    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users', contact);

    dispatch({ type: 'ADD_CONTACT', payload: contact})
  }

  // Update contact
  const updateContact = () => {

  }

  // Delete contact
  const deleteContact = (id) => {
    try {
      dispatch({ type: "DELETE_CONTACT", payload: id })
    } catch (err) {
      dispatch({ type: 'CONTACTS_ERROR', payload: err.response.data.error });
    }
  }

  return (
    <ContactContext.Provider value={{
      contacts: state.contacts,
      errors: state.errors,
      getContacts,
      addContact,
      updateContact,
      deleteContact
    }}>
      {children}
    </ContactContext.Provider>
  );
}