import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { PrivateRoute } from "./AuthRoute";
import AdminRoutes from "./admin";
import UnAuthRoutes from "./normal";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/auth" />} />
      <Route path="/auth" component={UnAuthRoutes} />
      <PrivateRoute path="/admin" component={AdminRoutes} />
    </Switch>
  );
};

export default Routes;
