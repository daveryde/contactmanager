// import React, { useState, useEffect, useContext } from 'react';
// import { ContactsContext } from '../../context/ContactsContext'

// const Test = () => {
//   const { dispatch } = useContext(ContactsContext);
//   const [test, setTest] = useState({
//     title: '',
//     body: ''
//   });

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data =>
//         setTest({
//           title: data.title,
//           body: data.body
//         })
//       );
//   }, [test]);

//   dispatch({
//     type: 'ADD', payload: {
//       name: '',
//       email: '',
//       phone: '',
//     }
//   })

//   const { title, body } = test;

//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{body}</p>
//     </div>
//   );
// }

// export default Test;
