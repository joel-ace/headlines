import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes.jsx';

// Get element with the id of app
const appContainer = document.getElementById('root');

// Render components to the react DOM
ReactDOM.render(<Routes />, appContainer);

