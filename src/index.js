import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Layout from './components/Layout';

const appContainer = document.getElementById('root');

ReactDOM.render(
  <HashRouter>
    <Route exact path="/" component={Layout} />
  </HashRouter >,
  appContainer,
);

