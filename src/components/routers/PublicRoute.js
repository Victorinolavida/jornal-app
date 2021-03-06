import React from "react";
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

export default function PublicRoute({
  isAuthenticated,
  component: Component,
  ...rest
}) {
  return (
    <>
      <Route
        {...rest}
        component={(props) =>
          !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </>
  );
}

PublicRoute.prototype = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
