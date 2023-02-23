import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard ,MovieDetailsPage, StatsPage} from '../pages';

const PublicRoutes = () => (<Fragment>
  <Switch>
    <Route path='/' exact>
      <Dashboard/>
    </Route>
    <Route path='/stats' exact>
      <StatsPage/>
    </Route>
    <Route path='/movie/:id' exact>
      <MovieDetailsPage/>
    </Route>
  </Switch>
</Fragment>);

export default PublicRoutes;
