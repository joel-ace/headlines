import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Header from './Header.jsx';
import Sources from './Sources.jsx';
import Articles from './Articles.jsx';


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

