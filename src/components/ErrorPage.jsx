import React from 'react';

/**
 * error page component
 * @returns {ReactElement} - the error page
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
