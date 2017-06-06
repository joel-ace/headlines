import React from 'react';

// id, name, description, url, category, language, country, urlsToLogos, sortBysAvailable}
const SingleSource = src => (
  <div className="col-xs-12 col-sm-4 col-md-4 nSrc">
    <div className="source">
      <span className="icon"><i className="fa fa-newspaper-o" /></span>
      <div className="link">
        <h3><a href={`#/articles/${src.id}`}>{src.name}</a></h3>
        <p>{src.description}</p>
      </div>
      <div className="clearfix" />
    </div>
  </div>
);

export default SingleSource;
