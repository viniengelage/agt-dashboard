import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import Login from '../pages/Login'
import Home from '../pages/Home'

import {SellersRoutes} from '../routes/config'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      {/* <PrivateRoute path="/admin" component={AdminRoutes} /> */}
      <PrivateRoute path="/home" component={Home}/>
      {SellersRoutes.map((route, i) => (
            <PrivateRoute key={i} {...route} />
      ))}
    </Switch>
  );
};

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const isLogged = !!localStorage.getItem('@AgoraTem:access_token');
  return isLogged ? (
    <Route
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  ) : (
    <Redirect to="/login" />
  );
};

export default Routes;
