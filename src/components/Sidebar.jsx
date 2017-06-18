import React from 'react';
import SidebaNav from './SidebarNav.jsx';
import * as SourceActions from '../actions/siteActions';
import SourceStore from '../stores/SourceStore';

/**
 * @class Sidebar
 * @extends {React.Component}
 */
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      loading: true,
    };
    this.fetchSources = this.fetchSources.bind(this);
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
      sources: SourceStore.getAll() || [],
      loading: false,
    });
  }

  render() {
    // Declare newsSources variable and assign the current state to it
    const newsSources = this.state;

    let navComponents;
    let sortComponent;

    /* Check if loading is set to true and:
       1. assign the navComponents variable
          the loading Component else the newsSources component
    */
    if (newsSources.loading) {
      navComponents = (
        <h2> <i className="fa fa-spinner fa-pulse fa-1x fa-fw" /> Loading </h2>
      );
    } else {
      // map through sources array and pass props to SidebaNav component
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
