import React from 'react';
import SidebaNav from './SidebarNav';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="side-bar">
        <h2>Sources</h2>
        <SidebaNav />
      </div>
    );
  }
}

export default Sidebar;
