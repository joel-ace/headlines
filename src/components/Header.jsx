import React from 'react';
import Login from './Login.jsx';

/**
 * header component
 * @returns {ReactElement} - the header
 */
const ErrorPage = () => (
  <header id="header">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <a className="logo" href="/">Headlines</a>
        </div>
        <div className="col-md-6" />
        <div className="col-md-3">
          <Login />
        </div>
      </div>
    </div>
  </header>
);

export default ErrorPage;
