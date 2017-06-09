import React from 'react';
import SidebaNav from './SidebarNav';
import * as SourceActions from '../actions/siteActions';
import SourceStore from '../stores/SourceStore';

class Sidebar extends React.Component {
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

  componentDidMount() {
    SourceStore.on('change', this.fetchSources);
  }

  componentWillUnmount() {
    SourceStore.removeListener('change', this.fetchSources);
  }

  fetchSources() {
    this.setState({
      sources: SourceStore.getAll() || [],
      loading: false,
    });
  }
  render() {
    const newsSources = this.state;
    let navComponents;
    if (newsSources.loading) {
      navComponents = (
        <h2> Loading .... </h2>
      );
    } else {
      navComponents = newsSources.sources.map(src => <SidebaNav key={src.id} {...src} />);
    }
    return (
      <div className="side-bar">
        <h2>Sources</h2>
        <p className="notice">Sidebar is Scrollable</p>
        <ul className="nav nav-pills nav-stacked">
          { navComponents }
        </ul>
      </div>
    );
  }
}


export default Sidebar;
