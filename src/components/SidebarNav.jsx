import React from 'react';

/**
 * SidebarNav Component
 * @param {object} src - source object
 * @returns {string} - A string of HTML list items of articles
 */
const SidebarNav = src => (
  <li>
    <a href={`#/articles/${src.id}`}>
      &raquo; {src.name}
    </a>
  </li>
);

export default SidebarNav;
