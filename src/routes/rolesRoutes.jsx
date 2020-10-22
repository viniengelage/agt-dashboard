import React from "react";
import { Route, Redirect } from "react-router-dom";

export const SellerRoutes = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('@AgoraTem:acess_token');
    const user = localStorage.getItem('@AgoraTem:user')

    return (
        <Route
        {...rest}
        render={(props) =>
            token ? <Redirect to={`/${user.role}`} /> : <Component {...props} />
        }
        />
    );
};