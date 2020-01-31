import React from "react";
import { Route, Redirect } from "react-router-dom";

// Requirements:
// Same API as <Route />, (same props as route)
// Renders a <Route /> and passes all the props through it
// checks if the user is authenticated, if they are, it renders the components prop. If not, it redirects the user to /login

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          // push to component prop
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;