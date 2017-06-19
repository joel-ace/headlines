import React from 'react';

/**
 * @function SidebarNav - SidebarNav Component
 * @return {string} - A string of HTML list items of articles
 */
const SidebarNav = src => (
  <li><a href={`#/articles/${src.id}/${src.sortBysAvailable}`}>&raquo; {src.name}</a></li>
);

export default SidebarNav;
