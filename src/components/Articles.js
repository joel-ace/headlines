import React from 'react';
import * as SiteActions from '../actions/siteActions';
import ArticleStore from '../stores/ArticleStore';
import SingleArticle from './SingleArticle';
import Sidebar from './Sidebar';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    SiteActions.fetchArticles(this.props.match.params.source, 'top');
    ArticleStore.on('change', () => {
      this.setState({
        articles: this.fetchArticles(),
      });
    });
  }

  fetchArticles() {
    this.setState({
      articles: ArticleStore.getArticles(),
    });
  }

  render() {
    const newsArticles = this.state;
    const articleComponents = newsArticles.articles.map(article => (
      <SingleArticle key={article.id} {...article} />
      ),
    );
    return (
      <section id="articles">
        <div className="container">
          <h2>Articles </h2>
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              { articleComponents }
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </section>
    );
  }
}

export default Articles;
