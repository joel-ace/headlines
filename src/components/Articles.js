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
      loading: true,
    };
    this.fetchArticles = this.fetchArticles.bind(this);
  }

  componentWillMount() {
    SiteActions.fetchArticles(this.props.match.params.source, 'top');
  }

  componentDidMount() {
    ArticleStore.on('change', this.fetchArticles);
  }

  componentWillUnmount() {
    ArticleStore.removeListener('change', this.fetchArticles);
  }

  fetchArticles() {
    this.setState({
      articles: ArticleStore.getArticles(),
      loading: false,
    });
  }

  sortArticles(sort) {
    SiteActions.fetchArticles(this.props.match.params.source, sort.target.value);
  }

  render() {
    const newsArticles = this.state;
    let articleComponents;

    console.log(this.state);

    // const sortOptions = news

    if (newsArticles.loading) {
      articleComponents = (
        <div className="loading">
          <i className="fa fa-spinner fa-pulse fa-5x fa-fw" />
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      articleComponents = newsArticles.articles.map(
        articles => <SingleArticle key={articles.title} {...articles} />,
      );
    }
    return (
      <section id="articles">
        <div className="container">
          <h2>Articles </h2>
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <div className="row same-height-fix">
                { articleComponents }
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </section>
    );
  }
}

export default Articles;
