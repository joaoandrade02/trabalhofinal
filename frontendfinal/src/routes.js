import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import Register from './pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/new" component={New}/>
      <Route path="/register" component={Register} />
    </Switch>
    </BrowserRouter>
  );
} 