import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ContactContext } from '../../context/ContactState';
import axios from 'axios';

const Contact = ({ contact }) => {
  // const { contacts } = useContext(ContactContext);
  const [isShowing, setShowing] = useState(false);

  const onDeleteClick = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      // dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      // dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  const { id, name, email, phone } = contact;
  return (
    <div className="card card-body mb-3">
      <h4>
        {name}{' '}
        <i
          onClick={() =>
            setShowing(
              !isShowing
            )
          }
          className="fas fa-sort-down"
          style={{ cursor: 'pointer' }}
        />
        <i
          className="fas fa-times"
          style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          // onClick={this.onDeleteClick.bind(this, id, dispatch)}
        />
        <Link to={`contact/edit/${id}`}>
          <i
            className="fas fa-pencil-alt"
            style={{
              cursor: 'pointer',
              float: 'right',
              color: 'black',
              marginRight: '1rem'
            }}
          />
        </Link>
      </h4>
      {isShowing ? (
        <ul className="list-group">
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">{phone}</li>
        </ul>
      ) : null}
    </div>
  )
}


Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
