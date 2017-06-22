import React from 'react';

/**
 * @function ErrorPage - Error page Component.
 * @return {string} - HTML that displays when user is accessing
 *                    a url that isn't available or contains no resource
 */
const ErrorPage = () => (
  <section id="error">
    <i className="fa fa-exclamation-triangle text-danger" />
    <h2>Oops!</h2>
    <h4>
      We can't seem to find what you are looking for? <br />
      It seems what you are looking for doesn't exist or has been removed. If you are lost,
      you can go back to the <a href="/">Home page</a> and start your journey again.
    </h4>
  </section>
);

export default ErrorPage;
