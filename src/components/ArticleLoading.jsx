import React from 'react';

/**
 * article loading component
 * @returns {ReactElement} - the loading icon for articles
 */
const ArticleLoading = () => (
  <div className="loading">
    <i className="fa fa-spinner fa-pulse fa-5x fa-fw" />
    <span className="sr-only">Loading...</span>
  </div>
);

export default ArticleLoading;
