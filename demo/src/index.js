import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import { Route, Switch, Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import {history} from './store';

ReactDOM.render((
  <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
  </Router>

), document.getElementById('root'));
