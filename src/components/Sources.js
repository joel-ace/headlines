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
  }

  componentWillMount() {
    SourceActions.fetchSources();
  }

  componentDidMount(){
    SourceStore.on('change', this.fetchSources);
  }

  componentWillUnmount(){
    SourceStore.removeListener('change', this.fetchSources);
  }

  fetchSources() {
    this.setState({
      sources: SourceStore.getAll(),
      loading: false,
    });
  }

  render() {
    const newsSources = this.state;
    let sourceComponents;
    if(newsSources.loading) {
      sourceComponents = (
        <h2> Loading .... </h2>
      )      
    } else {
      sourceComponents = newsSources.sources.map(src => <SingleSource key={src.id} {...src} />);
    }
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
