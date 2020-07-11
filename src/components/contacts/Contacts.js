import React, { useContext } from 'react';

// Context
import ContactContext from '../../context/contact/ContactContext';

// Child component
import Contact from './Contact';

const Contacts = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Contact</span>List
      </h1>
      {/* Check for contacts in state and map/create a contact component for each  */}
      {contacts && contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  );
}

export default Contacts;
