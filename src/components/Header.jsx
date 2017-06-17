import React from 'react';
import Login from './Login.jsx';

/**
 * @function ErrorPage - Error page Component.
 * @return {string} - HTML that displays when user is accessing
 *                    a url that isn't available or contains no resource
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
