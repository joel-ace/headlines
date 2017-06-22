import React from 'react';
import * as SiteActions from '../actions/siteActions';
import ArticleStore from '../stores/ArticleStore';
import SingleArticle from './SingleArticle.jsx';
import Sidebar from './Sidebar.jsx';

/**
 * @class Articles
 * @extends {React.Component}
 */
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

  /**
   * @method componentDidMount - Runs after the page has been rendered
   * @return {void}
   * Retrieves article sort value by calling getSortOptions()
   * and assigns it to instance variable
   * Makes a call to get list of Articles
   * Listens for a change in the ArticleStore
   */
  componentDidMount() {
    this.SortArticleBy = this.getSortOptions()[0];
    ArticleStore.on('change', this.fetchArticles);
    SiteActions.fetchArticles(
      this.props.match.params.source, this.SortArticleBy
    );
  }

  /**
   * @method componentWillReceiveProps - Runs after page render and props change
   * @return {void}
   * Retrieves article sort value by calling getSortOptions()
   * and assigns it to instance variable
   * Makes a call to get list of updated Articles
   * Sets the state with new
   */
  componentWillReceiveProps(props) {
    this.SortArticleBy = this.getSortOptions()[0];
    SiteActions.fetchArticles(props.match.params.source, this.SortArticleBy);
    this.setState({
      loading: true,
      sortBy: this.getSortOptions(this.props),
      articles: ArticleStore.getArticles(),
    });
  }

  /**
   * @method componentWillUnmount - Runs before component is removed from the DOM
   * @return {void}
   * Removes the change Listener from ArticleStore
   */
  componentWillUnmount() {
    ArticleStore.removeListener('change', this.fetchArticles);
  }

  /**
   * @method getSortOptions - Listens for an event and makes an action call to the Api
   * @return {array} - returns an array of sort by options
   */
  getSortOptions() {
    const { match } = this.props;
    const { params } = match;
    return params.sort.split(',');
  }

  /**
   * @method fetchArticles - Sets the state of articles to
   * data retrieved from ArticleStore; loading to false;
   * and sortBy to an array of options available for sorting
   * @return {void}
   */
  fetchArticles() {
    this.setState({
      articles: ArticleStore.getArticles() || [],
      loading: false,
      sortBy: this.getSortOptions(this.props),
    });
  }

  /**
   * @method sortArticles - Listens for an event and makes a call to get list of
   * articles from a particular source and sort option
   * @param {event} event - Accepts an event parameter
   * @return {void}
   */
  sortArticles(event) {
    SiteActions.fetchArticles(this.props.match.params.source, event.target.value);
  }

  render() {
    // Declare newsArticles variable and assign the current state to it
    const newsArticles = this.state;

    let articleComponents;
    let sortSelect;

    /* Check if loading is set to true and:
       1. assign the articleComponents variable
          the loading Component else the SingleArticle component
       2. set the value of sortSelect to an empty array if loading
          is true else map through the state's sortBy array if false
    */
    if (newsArticles.loading) {
      articleComponents = (
        <div className="loading">
          <i className="fa fa-spinner fa-pulse fa-5x fa-fw" />
          <span className="sr-only">Loading...</span>
        </div>
      );
      sortSelect = [];
    } else {
      // map through articles array and pass props to SingleArticle component
      articleComponents = newsArticles.articles.map(
        articles => <SingleArticle key={articles.title} {...articles} />,
      );

      // map through sortBy array and pass props to SingleArticle component
      sortSelect = this.state.sortBy.map(
        sort => <option key={sort} value={sort}>{sort}</option>,
      );
    }

    return (
      <section id="articles">
        <div className="container">
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
