import React from 'react';
import { Switch } from 'react-router-dom';

import Signin from '../pages/Signin';
import Dashboard from '../pages/Dashboard';
import AddUser from '../pages/AddUser';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Signin} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    <Route path="/user-new" exact component={AddUser} isPrivate />
  </Switch>
);

export default Routes;
