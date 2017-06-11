import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Utils from './utils';
import Header from './components/Header.jsx';
import Sources from './components/Sources.jsx';
import Articles from './components/Articles.jsx';
import Protected from './components/Protected.jsx';


const Routes = () => (
  <div>
    <Header />
    <HashRouter>
      <div>
        <Route exact path="/" component={Sources} />
        {/*<Route exact path="/login" component={Login} />*/}
        <Route path="/articles/:source/:sort" component={Utils.isLoggedIn() ? Articles : Protected} />
        {/* <Route path="*" component={NotFound} />*/}
      </div>
    </HashRouter >,
</div>
);


export default Routes;
