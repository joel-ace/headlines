import React from 'react';

/**
 * source loading component
 * @returns {ReactElement} - the loading icon for sources
 */
const SourceLoading = () => (
  <div className="loading">
    <i className="fa fa-spinner fa-pulse fa-5x fa-fw" />
    <span className="sr-only">Loading...</span>
  </div>
);

export default SourceLoading;
