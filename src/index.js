import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import fullheight from 'jquery-fullheight';
import Routes from './Routes.jsx';

console.log($('.nrc'));

const appContainer = document.getElementById('root');

ReactDOM.render(<Routes />, appContainer);

