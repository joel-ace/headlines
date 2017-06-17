import React from 'react';
import * as SiteActions from '../actions/siteActions';
import ArticleStore from '../stores/ArticleStore';
import SingleArticle from './SingleArticle.jsx';
import Sidebar from './Sidebar.jsx';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      sortBy: [],
    };
    this.sortArticles = this.sortArticles.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
    this.SortArticleBy = [];
  }

  componentDidMount() {
    this.SortArticleBy = this.getSortOptions()[0];
    ArticleStore.on('change', this.fetchArticles);
    SiteActions.fetchArticles(this.props.match.params.source, this.SortArticleBy);
  }

  componentWillReceiveProps(props) {
    this.SortArticleBy = this.getSortOptions()[0];
    SiteActions.fetchArticles(props.match.params.source, this.SortArticleBy);
    this.setState({
      loading: true,
      sortBy: this.getSortOptions(this.props),
      articles: ArticleStore.getArticles(),
    });
  }

  componentWillUnmount() {
    ArticleStore.removeListener('change', this.fetchArticles);
  }


  getSortOptions() {
    const { match } = this.props;
    const { params } = match;
    return params.sort.split(',');
  }

  fetchArticles() {
    this.setState({
      articles: ArticleStore.getArticles() || [],
      loading: false,
      sortBy: this.getSortOptions(this.props),
    });
  }

  sortArticles(event) {
    SiteActions.fetchArticles(this.props.match.params.source, event.target.value);
  }

  render() {
    const newsArticles = this.state;
    let articleComponents;
    let sortSelect;

    if (newsArticles.loading) {
      articleComponents = (
        <div className="loading">
          <i className="fa fa-spinner fa-pulse fa-5x fa-fw" />
          <span className="sr-only">Loading...</span>
        </div>
      );
      sortSelect = [];
    } else {
      articleComponents = newsArticles.articles.map(
        articles => <SingleArticle key={articles.title} {...articles} />,
      );

      sortSelect = this.state.sortBy.map(
        sort => <option key={sort} value={sort}>{sort}</option>,
      );
    }

    return (
      <section id="articles">
        <div className="container-fluid">
          <div className="pull-right">
            <select name="sort-articles" onChange={this.sortArticles} id="sort-articles" className="form-control">
              { sortSelect }
            </select>
          </div>
          <h2>Articles </h2>
          <div className="clearfix" />
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
