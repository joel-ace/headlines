import React from 'react';

const SingleArticle = articles => (
  <div className="col-md-6 nrc">
    <div className="article">
      <span className="articleImage">
        <img
          src={articles.urlToImage}
          alt={articles.title}
          width="400px"
        />
      </span>
      <div className="link">
        <h3><a href={articles.url} rel="noopener noreferrer" target="_blank">{ articles.title }</a></h3>
        <p>
          {articles.description}
        </p>
        <p className="pull-right">
          <a href={articles.url} rel="noopener noreferrer" target="_blank">Read More</a>
        </p>
      </div>
      <div className="clearfix" />
    </div>
  </div>
);

export default SingleArticle;
