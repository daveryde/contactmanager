import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Contact State
import { StateProvider } from './context/contact/ContactState';

// Root element
const rootElement = document.getElementById('root');

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>, rootElement);