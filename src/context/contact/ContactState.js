import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

// Context / Reducer
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

// Initial state
const initialState = {
  contacts: [],
  contact: null,
  errors: null
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Get contacts on render
  useEffect(() => {
    getContacts();
  }, [])

  // Get contact
  const getContact = async (id) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    dispatch({ type: 'GET_CONTACT', payload: res.data })
  }

  // Get contacts
  const getContacts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    try {
      dispatch({ type: 'GET_CONTACTS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'CONTACTS_ERROR', payload: err.response.data.error });
    }
  }

  // Add contact
  const addContact = async (contact) => {
    await axios.post(
      'https://jsonplaceholder.typicode.com/users', contact);

    try {
      dispatch({ type: 'ADD_CONTACT', payload: contact })
    } catch (err) {
      dispatch({ type: 'CONTACTS_ERROR', payload: err.response.data.error });
    }
  }

  // Update contact
  const updateContact = async (contact) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }

      const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact, config)

      dispatch({ type: 'UPDATE_CONTACT', payload: res.data })
    } catch (err) {
      dispatch({ type: 'CONTACTS_ERROR', payload: err.response.data.error })
    }
  }

  // Delete contact
  const deleteContact = (id) => {
    try {
      dispatch({ type: 'DELETE_CONTACT', payload: id })
    } catch (err) {
      dispatch({ type: 'CONTACTS_ERROR', payload: err.response.data.error });
    }
  }

  // Set current contact
  const setCurrent = async (contact) => {
    try {
      dispatch({ type: 'SET_CURRENT', payload: contact })
    } catch (err) {
      dispatch({ type: 'CONTACTS_ERROR', payload: err.response.data.error });
    }
  }

  // Clear current contact
  const clearCurrent = async () => {
    dispatch({ type: 'CLEAR_CURRENT' })
  }

  return (
    <ContactContext.Provider value={{
      contacts: state.contacts,
      current: state.contact,
      errors: state.errors,
      getContact,
      getContacts,
      addContact,
      updateContact,
      deleteContact,
      setCurrent,
      clearCurrent
    }}>
      {children}
    </ContactContext.Provider>
  );
}