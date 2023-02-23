import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './Auth';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path=''>
        <Auth />
      </Route>
    </Switch>
  </BrowserRouter>
);
