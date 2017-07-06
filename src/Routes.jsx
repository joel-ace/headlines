import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Utils from './utils';
import Header from './components/Header.jsx';
import Sources from './components/Sources.jsx';
import Articles from './components/Articles.jsx';
import Protected from './components/Protected.jsx';
import ErrorPage from './components/ErrorPage.jsx';


const Routes = () => (
  <div>
    <Header />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Sources} />
        <Route
          exact path="/articles/:source"
          component={Utils.isLoggedIn() ? Articles : Protected}
        />
        <Route component={ErrorPage} />
      </Switch>
    </HashRouter >,
  </div>
);


export default Routes;
