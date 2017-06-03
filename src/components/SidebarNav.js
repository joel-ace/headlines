import React from 'react';

const SidebarNav = src => (
  <ul className="nav nav-pills nav-stacked">
    <li><a href={`#/articles/${src.id}`}>&raquo; {src.name}</a></li>
  </ul>
);

export default SidebarNav;
