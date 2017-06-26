import React from 'react';
import SingleSource from './SingleSource.jsx';
import SourceLoading from '../components/SourceLoading.jsx';
import * as SourceActions from '../actions/siteActions';
import SourceStore from '../stores/SourceStore';

/**
 * Sources component
 * @class Sources
 * @extends {React.Component}
 */
class Sources extends React.Component {
  /**
   * Creates an instance of Sources.
   * @memberof Sources
   */
  constructor() {
    super();
    this.state = {
      sources: [],
      loading: true,
    };
    this.fetchSources = this.fetchSources.bind(this);
    this.searchSources = this.searchSources.bind(this);
  }

  /**
   * Runs after the page has been rendered
   * Makes a call to get list of Sources
   * Listens for a change in the SourceStore
   * @return {void}
   * @memberof Sources
   */
  componentDidMount() {
    SourceStore.on('change', this.fetchSources);
    SourceActions.fetchSources();
  }

  /**
   * Runs before component is removed from the DOM
   * Removes the change Listener from SourceStore
   * @returns {void}
   * @memberof Sources
   */
  componentWillUnmount() {
    SourceStore.removeListener('change', this.fetchSources);
  }

  /**
   * Sets state to data retrieved from SourceStore
   * @returns {void}
   * @memberof Sources
   */
  fetchSources() {
    this.setState({
      sources: SourceStore.getAll(),
      loading: false,
    });
  }

  /**
   * Filters available sources based on user input
   * @param {any} searchSring - query string
   * @memberof Sources
   * @returns {void}
   */
  searchSources(searchSring) {
    const word = searchSring.target.value;
    const searchResults = SourceStore.getAll().filter(
      src => (
        src.name.toLowerCase().indexOf(word.toLowerCase()) !== -1
      ),
    );
    this.setState({
      sources: searchResults,
      loading: false,
    });
  }

  /**
   * renders the sources component
   * @returns {ReactElement} - the sources component
   * @memberof Sources
   */
  render() {
    const newsSources = this.state;
    let sourceComponents;
    if (newsSources.loading) {
      sourceComponents = (
        <SourceLoading />
      );
    } else {
      sourceComponents = newsSources.sources.map(
        src => <SingleSource key={src.id} {...src} />
      );
    }
    return (
      <section id="sources">
        <div className="container">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <div className="form-group">
                <input
                  onChange={this.searchSources}
                  type="text"
                  className="form-control p20"
                  placeholder="Search News Source"
                />
                <div className="p20" />
              </div>
            </div>
            <div className="col-md-3" />
          </div>
          <div className="row">
            { sourceComponents }
          </div>
        </div>
      </section>
    );
  }
}

export default Sources;
