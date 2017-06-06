import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Header from './Header';
import Sources from './Sources';
import Articles from './Articles';


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

