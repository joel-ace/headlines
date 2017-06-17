import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Header from './Header.jsx';
import Sources from './Sources.jsx';
import Articles from './Articles.jsx';

/**
 * @function Layout - Layout Component.
 * @return {void}
 * Retrieves article sort value by calling getSortOptions()
 * and assigns it to instance variable
 * Makes a call to get list of Articles
 * Listens for a change in the ArticleStore
 */
const Layout = () => (
  <div>
    <Header />
    <HashRouter>
      <div>
        <Route exact path="/" component={Sources} />
        <Route path="/articles/:source" component={Articles} />
      </div>
    </HashRouter >,
</div>
);


export default Layout;

