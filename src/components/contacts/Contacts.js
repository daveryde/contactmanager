import React, { useEffect, useContext } from 'react';
import Contact from './Contact';
import { ContactContext } from '../../context/ContactState';
import axios from 'axios';

const Contacts = () => {
  const { contacts, getContacts } = useContext(ContactContext);

  useEffect(() => {
    getContacts();
  }, [])
  
  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Contact</span>
                List
              </h1>
      {contacts && contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  );
}

export default Contacts;
