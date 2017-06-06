import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Sources from './components/Sources';
import Articles from './components/Articles';


const Routes = () => (
  <div>
    <Header />
    <HashRouter>
      <div>
        <Route exact path="/" component={Sources} />
        <Route path="/articles/:source" component={Articles} />
        {/*<Route path="*" component={NotFound} />*/}
      </div>
    </HashRouter >,
</div>
);


export default Routes;
