import React from 'react';

/**
 * @function SingleSource - SingleSource Component that renders individual sources
 * @return {string} - A string of HTML divs of sources
 */
const SingleSource = src => (
  <div className="col-md-4 nrc">
    <div className="source">
      <span className="icon"><i className="fa fa-newspaper-o" /></span>
      <div className="link">
        <h3>
          <a href={`#/articles/${src.id}/${src.sortBysAvailable}`}>
            {src.name}
          </a>
        </h3>
        <p>{src.description}</p>
      </div>
      <div className="clearfix" />
    </div>
  </div>
);

export default SingleSource;
