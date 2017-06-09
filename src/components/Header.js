import React from 'react';
import Source from './SingleSource';


export default ({searchSources}) => (
  <header id="header">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          Headlines
        </div>
        <div className="col-md-6" />
        <div className="col-md-3">
          <span className="google_login pull-right">
            <span><i className="fa fa-google-plus" /></span>
            <span> Login with Google</span>
          </span>
        </div>
      </div>
    </div>
  </header>
);
