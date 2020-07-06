import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";

// Context
import ContactContext from '../../context/contact/ContactContext';

// Helper component
import TextInputGroup from '../layout/TextInputGroup';

const AddContact = () => {
  const { addContact, errors } = useContext(ContactContext);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    errors: {}
  });

  // History hook
  let history = useHistory();

  // Destructure values from component state
  const { name, email, phone } = contact;

  const onSubmit = async (e) => {
    e.preventDefault();

    // Check For Errors
    if (name === '') {
      setContact({
        errors: { name: 'Name is required' }
      });
      return;
    }

    if (email === '') {
      setContact({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      setContact({ errors: { phone: 'Phone is required' } });
      return;
    }

    // New contact obj with component state
    const newContact = {
      name,
      email,
      phone
    };

    // Add new contact to context
    addContact(newContact);

    // Clear component state
    setContact({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    // Return to contacts list after contact added to context
    history.push('/');
  };

  // Update component state onchange
  const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

  return (
    <div className="card mb-3">
      <div className="card-header">Add Contact</div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <TextInputGroup
            label="Name"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => onChange(e)}
            errors={errors}
          />
          <TextInputGroup
            label="Email"
            name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => onChange(e)}
            error={errors}
          />
          <TextInputGroup
            label="Phone"
            name="phone"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => onChange(e)}
            errors={errors}
          />
          <input
            type="submit"
            value="Add Contact"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
}

export default AddContact;
