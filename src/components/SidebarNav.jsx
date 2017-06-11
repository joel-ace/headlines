import React from 'react';

const SidebarNav = src => (
  <li><a href={`#/articles/${src.id}/${src.sortBysAvailable}`}>&raquo; {src.name}</a></li>
);

export default SidebarNav;
