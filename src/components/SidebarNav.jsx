import React from 'react';

/**
 * @description SidebarNav Component
 * @param {object} src source object
 * @returns {string} HTML list items of sources
 */
const SidebarNav = src => (
  <li>
    <a href={`#/articles/${src.id}`}>
      &raquo; {src.name}
    </a>
  </li>
);

export default SidebarNav;


