import React from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
} from 'react-router-dom';

import Home from '../pages/Home'

const IndexRoutes = ({
  component: Component,
  ...rest
}) => {
  const isLogged = !!localStorage.getItem('@AgoraTem:acess_token');
  return isLogged ? (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return <Home/>;
      }}
    />
  ) : (
    <Redirect to="/login" />
  );
};

export default IndexRoutes;