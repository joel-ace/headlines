import React from 'react';

const SidebarNav = src => (
  <div>
    <li><a href={`#/articles/${src.id}`}>&raquo; {src.name}</a></li>
  </div>
);

export default SidebarNav;
