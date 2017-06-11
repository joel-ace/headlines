import React from 'react';
import SidebaNav from './SidebarNav.jsx';
import * as SourceActions from '../actions/siteActions';
import SourceStore from '../stores/SourceStore';
import SortBy from '../components/SortBy.jsx';

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
    let sortComponent;
    if (newsSources.loading) {
      navComponents = (
        <h2> <i className="fa fa-spinner fa-pulse fa-1x fa-fw" /> Loading </h2>
      );
    } else {
      navComponents = newsSources.sources.map(src => <SidebaNav key={src.id} {...src} />);
    }
    return (
      <div className="side-bar">
        { sortComponent }
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
