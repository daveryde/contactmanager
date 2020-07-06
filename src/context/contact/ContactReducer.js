export default (state, action) => {
  // Destructure values from param
  const { contacts } = state;
  const { type, payload } = action;

  switch (type) {
    case 'GET_CONTACT':
      return {
        ...state,
        contact: payload
      }
    case 'GET_CONTACTS':
      return {
        ...state,
        contacts: payload
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [payload, ...contacts]
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: contacts.map(contact =>
          contact.id === payload.id
            ? (contact = payload)
            : contact
        )
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: contacts.filter(
          contact => contact.id !== payload
        )
      };
    case 'SET_CURRENT':
      return {
        ...state,
        contact: payload
      };
    case 'CLEAR_CURRENT':
      return {
        ...state,
        contact: null
      }
    case 'CONTACTS_ERROR':
      return {
        ...state,
        errors: payload
      };
    default:
      return state;
  }
}