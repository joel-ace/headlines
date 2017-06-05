import React from 'react';
import * as SourceActions from '../actions/siteActions';
import SingleArticle from './SingleArticle';
import Sidebar from './Sidebar';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  render() {
    return (
      <section id="articles">
        <div className="container">
          <h2>Articles ({source})</h2>
          <div className="row">
            <div className="col-md-3">
              <Sidebar {...src} />
            </div>
            <div className="col-md-9">
              <SingleArticle title={title} />
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </section>
    );
  }
}

export default Articles;
