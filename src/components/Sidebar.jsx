import React from 'react';
import SidebarNav from './SidebarNav.jsx';
import SourceLoading from './SourceLoading.jsx';
import HigherOrderComponent from './HigherOrderComponent.jsx';
import Utils from '../utils';

/**
 * @description Sidebar component
 * @param {object} props
 * @returns {ReactElement} a react component
 */
const SideBar = props => {
  return(
  <div className="side-bar">
    <h2>Sources</h2>
    <p className="notice">Sidebar is Scrollable</p>
    <ul className="nav nav-pills nav-stacked">
      { props.sourceLoading ? <SourceLoading /> : Utils.generateComponents(props.sources, SidebarNav, 'id') }
    </ul>
  </div>
)};

export default HigherOrderComponent(SideBar);
