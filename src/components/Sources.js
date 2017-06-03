import React from 'react';
import SingleSource from './SingleSource';
import SourceStore from '../stores/SourceStore';

class Sources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
    };
  }

  componentWillMount() {
    SourceStore.getAll().then(
      res => this.setState({
        sources: res.sources,
      }),
    );
  }

  render() {
    const newsSources = this.state;
    const sourceComponents = newsSources.sources.map((src) => {
      return <SingleSource key={src.id} {...src} />;
    });
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
