import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import {SellersRoutes, CustomerRoutes} from '../routes/config'

import Login from '../pages/Login'
import Register from "../pages/Register";
import Home from '../pages/Home'
import { useAuth } from "../hooks/auth";

const Routes = () => {
  const {role} = useAuth();

  function handleVerifyRole(role){
    switch (role) {
      case 'customer':
        return CustomerRoutes
      case 'seller':
        return SellersRoutes 
      default:
        break;
    }
  }

  function handleRedirect(userRole){
    if(userRole === false){
      return <Redirect to="/login" />
    }
    return handleVerifyRole(role).map((route, i) => (
      <PrivateRoute key={i} {...route} />
    ))
  }

  const hasRole = !!localStorage.getItem('@AgoraTem:role');

  return (
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/login" />} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/home" component={Home}/>
      {handleRedirect(hasRole)}
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
