import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Layout from './components/Layout';

const appContainer = document.getElementById('root');

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Layout} />
    </Switch>
  </HashRouter >,
  appContainer,
);

