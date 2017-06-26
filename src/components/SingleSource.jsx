import React from 'react';

/**
 * SingleSource Component that renders individual sources
 * @param {object} source a source object
 * @returns {string} a string of HTML divs of sources
 */
const SingleSource = source => (
  <div className="col-md-4 nrc">
    <div className="source">
      <span className="icon"><i className="fa fa-newspaper-o" /></span>
      <div className="link">
        <h3>
          <a href={`#/articles/${source.id}/${source.sortBysAvailable}`}>
            {source.name}
          </a>
        </h3>
        <p>{source.description}</p>
      </div>
      <div className="clearfix" />
    </div>
  </div>
);

export default SingleSource;
