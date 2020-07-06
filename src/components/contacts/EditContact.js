import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

// Context
import ContactContext from '../../context/contact/ContactContext';

// Helper component
import TextInputGroup from '../layout/TextInputGroup';

const EditContact = () => {
  const { current, updateContact, clearCurrent } = useContext(ContactContext);
  const [contact, setContact] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    error: {}
  });

  // Get history obj hook
  let history = useHistory();

  // Get current contact by id
  useEffect(() => {
    if (current !== null) {
      setContact({
        id: current.id,
        name: current.name,
        email: current.email,
        phone: current.phone
      });
    }
  }, [current])

  // Destructure component state
  const { name, email, phone, errors } = contact;

  const onSubmit = async (e) => {
    e.preventDefault();

    // Check For Missing Fields
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

    // update component state contact
    updateContact(contact);

    // Clear State
    setContact({
      name: '',
      email: '',
      phone: '',
      error: {}
    });

    // Clear current contact from context
    clearCurrent();

    // Return to contacts list after contact added to context
    history.push('/');
  };

  const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

  return (
    <div className="card mb-3">
      <div className="card-header">Edit Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onSubmit(e)}>
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
            errors={errors}
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


export default EditContact;
