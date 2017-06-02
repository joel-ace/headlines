import React from 'react';

class Sidebar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="side-bar">
        <h2>Sources</h2>
        <ul className="nav nav-pills nav-stacked">
          <li><a href="/admin/add-book">&raquo; Add Book</a></li>
          <li><a href="/admin/add-category">&raquo; Add Book Category</a></li>
          <li><a href="/admin/manage-books">&raquo; Manage Books</a></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
