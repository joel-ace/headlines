import React from 'react';
import SingleSource from './SingleSource.jsx';
import * as SourceActions from '../actions/siteActions';
import SourceStore from '../stores/SourceStore';

/**
 * @class Sources - Sources component that renders the sources page
 * @extends {React.Component}
 */
class Sources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      loading: true,
    };
    this.fetchSources = this.fetchSources.bind(this);
    this.searchSources = this.searchSources.bind(this);
  }

  /**
   * @method componentDidMount - Runs after the page has been rendered
   * @return {void}
   * Makes a call to get list of Sources
   * Listens for a change in the SourceStore
   */
  componentDidMount() {
    SourceStore.on('change', this.fetchSources);
    SourceActions.fetchSources();
  }

  /**
   * @method componentWillUnmount - Runs before component is removed from the DOM
   * @return {void}
   * Removes the change Listener from SourceStore
   */
  componentWillUnmount() {
    SourceStore.removeListener('change', this.fetchSources);
  }

  /**
   * @method fetchSources - Sets the state of sources to
   * data retrieved from SourceStore
   * @return {void}
   */
  fetchSources() {
    this.setState({
      sources: SourceStore.getAll(),
      loading: false,
    });
  }

  /**
   * @method searchSources - Filters available sources based on user input
   * @return {void}
   */
  searchSources(q) {
    const word = q.target.value;
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

  render() {
    const newsSources = this.state;
    let sourceComponents;
    if (newsSources.loading) {
      sourceComponents = (
        <div className="loading">
          <i className="fa fa-spinner fa-pulse fa-5x fa-fw" />
          <span className="sr-only">Loading...</span>
        </div>
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
