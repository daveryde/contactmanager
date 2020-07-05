export default (state, action) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return {
        ...state,
        contacts: action.payload
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'CONTACTS_ERROR':
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state;
  }
}