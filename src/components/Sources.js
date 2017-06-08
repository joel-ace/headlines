import React from 'react';
import SingleSource from './SingleSource';
import * as SourceActions from '../actions/siteActions';
import SourceStore from '../stores/SourceStore';

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

  componentWillMount() {
    SourceActions.fetchSources();
  }

  componentDidMount() {
    SourceStore.on('change', this.fetchSources);
  }

  componentWillUnmount() {
    SourceStore.removeListener('change', this.fetchSources);
  }

  fetchSources() {
    this.setState({
      sources: SourceStore.getAll(),
      loading: false,
    });
  }

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
      sourceComponents = newsSources.sources.map(src => <SingleSource key={src.id} {...src} />);
    }
    return (
      <section id="sources">
        <div className="col-md-6">
          <input
            onChange={this.searchSources}
            type="text"
            className="form-control p20"
            placeholder="Search News Source"
          />
        </div>
        <div className="container">
          <h2>Sources</h2>
          <div className="row">
            { sourceComponents }
          </div>
        </div>
      </section>
    );
  }
}

export default Sources;
