import React from 'react';
import * as SiteActions from '../actions/siteActions';
import SourceStore from '../stores/SourceStore';
import ArticleStore from '../stores/ArticleStore';

/**
 * @description Creates a Higher Order Component.
 * @param {ReactComponent} Component react component
 * @returns {ReactComponent} a react component
 */
const HigherOrderComponent = Component => class extends React.Component {
  /**
   * @description Initialise state.
   * @constructor
   * @param {object} props
   * @memberof Articles
   */
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      sources: [],
      articleLoading: true,
      sourceLoading: true,
      sortBy: [],
    };
    this.sortArticles = this.sortArticles.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
    this.fetchSources = this.fetchSources.bind(this);
    this.getSortOptions = this.getSortOptions.bind(this);
    this.getSourceTitle = this.getSourceTitle.bind(this);
    this.searchSources = this.searchSources.bind(this);
    this.SortArticleBy = [];
  }

  /**
   * @description Listens for change makes a call to get source and articles
   * @method
   * @returns {void}
   * @memberof Articles
   */
  componentDidMount() {
    const { match: { params: { source = '' } = {} } = {} } = this.props;

    if (source) {
      ArticleStore.on('change', this.fetchArticles);
      SiteActions.fetchArticles(source, this.getSortOptions()[0] || '');
    }

    SourceStore.on('change', this.fetchSources);
    SiteActions.fetchSources();
  }

  /**
   * @description sets new state when props change
   * @method
   * @param {object} nextProps the next prop
   * @memberof Articles
   * @returns {void}
   */
  componentWillReceiveProps(nextProps) {
    const { match: { params: { source } = {} } = {} } = nextProps;
    const { match: { params: { source: sourceTwo } = {} } = {} } = this.props;

    if (source !== sourceTwo) {
      SiteActions.fetchArticles(source, this.getSortOptions()[0]);
      this.setState({
        articleLoading: true,
        sourceLoading: true,
        currentSort: this.getSortOptions()[0],
        sortBy: this.getSortOptions(),
        articles: ArticleStore.getArticles(),
        sources: SourceStore.getAll(),
        sourceTitle: this.getSourceTitle(),
      });
    }
  }

  /**
   * @description Removes the change Listener from ArticleStore
   * @method
   * @return {void}
   * @memberof Articles
   */
  componentWillUnmount() {
    ArticleStore.removeListener('change', this.fetchArticles);
    SourceStore.removeListener('change', this.fetchSources);
  }

  /**
   * @description Sets the state of articles to data retrieved from ArticleStore
   * @method
   * @memberof Articles
   * @returns {void}
   */
  fetchArticles() {
    this.setState({
      articles: ArticleStore.getArticles() || [],
      articleLoading: false,
      sortBy: this.getSortOptions(),
      sourceTitle: this.getSourceTitle(),
    });
  }

  /**
   * @description Sets state to data retrieved from SourceStore
   * @method
   * @return {void}
   */
  fetchSources() {
    this.setState({
      sources: SourceStore.getAll() || [],
      sourceLoading: false,
      sortBy: this.getSortOptions(),
      sourceTitle: this.getSourceTitle(),
    });
  }

  /**
   * @description gets sort options
   * @method
   * @returns {array} - an array of sort by options
   * @memberof Articles
   */
  getSortOptions() {
    const { sources } = this.state;
    const { match: { params: { source } = {} } = {} } = this.props;
    const filteredSourceObject = sources.filter(
      sourceObject => (
        sourceObject.id === source
      )
    );
    return filteredSourceObject.length < 1 ? [] : filteredSourceObject[0].sortBysAvailable;
  }

  /**
   * @description Filters available sources based on user input
   * @param {any} searchString - search query string
   * @memberof Sources
   * @returns {void}
   */
  searchSources(searchString) {
    const word = searchString.target.value;
    const searchResults = SourceStore.getAll().filter(
      src => (
        src.name.toLowerCase().indexOf(word.toLowerCase()) !== -1
      ),
    );
    this.setState({
      sources: searchResults,
      sourceLoading: false,
    });
  }

  /**
   * @description gets title of article source
   * @method
   * @returns {string} article source title
   * @memberof Articles
   */
  getSourceTitle() {
    const { sources } = this.state;
    const { match: { params: { source } = {} } = {} } = this.props;
    const filteredSourceObject = sources.filter(
      sourceObject => (
        sourceObject.id === source
      )
    );
    return filteredSourceObject.length < 1 ? '' : filteredSourceObject[0].name;
  }


  /**
   * @description Listens for an event and makes a call to get list of articles
   * @method
   * @param {event} event - an event
   * @memberof Articles
   * @returns {void}
   */
  sortArticles(event) {
    const { match: { params: { source } = {} } = {} } = this.props;
    this.setState({
      currentSort: event.target.value
    }, () => {
      SiteActions.fetchArticles(source, this.state.currentSort);
    });
  }

  /**
   * @description renders component
   * @method
   * @returns {ReactElement} a react elemnent
   */
  render() {
    return (
      <Component
        {...this.state}
        {...this.props}
        sortArticles={this.sortArticles}
        searchSources={this.searchSources}
      />
    );
  }
  };

export default HigherOrderComponent;
