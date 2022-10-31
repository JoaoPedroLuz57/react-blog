import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Posts from './Pages/Posts';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
      <Route component={NotFound} />
    </Switch>
  );
}
