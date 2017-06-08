import React from 'react';

const SidebarNav = src => (
  <li><a href={`#/articles/${src.id}`}>&raquo; {src.name}</a></li>
);

export default SidebarNav;
