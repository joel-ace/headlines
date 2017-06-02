import React from 'react';
import SingleArticle from './SingleArticle';
import Sidebar from './Sidebar';

class Articles extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { source } = this.props.match.params;
    return (
      <section id="articles">
        <div className="container">
          <h2>Articles ({source})</h2>
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <SingleArticle />
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </section>
    );
  }
}

export default Articles;
