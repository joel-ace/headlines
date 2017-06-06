import React from 'react';
import SingleSource from './SingleSource';
import * as SourceActions from '../actions/siteActions';
import SourceStore from '../stores/SourceStore';

class Sources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
    };
  }

  componentDidMount() {
    SourceActions.fetchSources();
    SourceStore.on('change', () => {
      this.setState({
        sources: this.fetchSources(),
      });
    });
  }

  fetchSources() {
    this.setState({
      sources: SourceStore.getAll(),
    });
  }

  render() {
    const newsSources = this.state;
    const sourceComponents = newsSources.sources.map(src => <SingleSource key={src.id} {...src} />);
    return (
      <section id="sources">
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
