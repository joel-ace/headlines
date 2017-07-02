import React from 'react';

/**
 * protected component
 * @returns {ReactElement} - the protected content page
 */
const Protected = () => (
  <section id="protected">
    <i className="fa fa-lock" />
    <h2>Oops!</h2>
    <h4>
      Seems like you are trying to access protected content. <br />
      Please login with your Google account to view news headlines
    </h4>
  </section>
);

export default Protected;
