import React from 'react';

const SingleArticle = articles => (
  <div className="col-md-6">
    <div className="article">
      <span className="articleImage">
        <img
          src={articles.urlToImage}
          alt=""
          width="400px"
        />
      </span>
      <div className="link">
        <h3><a href="/service/accounting-services">{ articles.title }</a></h3>
        <p>
          {articles.description}
        </p>
        <p className="pull-right">
          <a href="/articles/{articles.id}">Read More</a>
        </p>
      </div>
      <div className="clearfix" />
    </div>
  </div>
);

export default SingleArticle;
