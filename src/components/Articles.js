import React from 'react';
import SingleArticle from './SingleArticle';
import Sidebar from './Sidebar';
import * as newsAPI from '../newsAPI';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: {},
    };
  }

  componentWillMount() {
    newsAPI.getSources().then((res) => {
      this.setState({
        articles: res,
      });
    });
  }

  render() {
    const { source } = this.props.match.params;
    const title = 'This is the title';

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
