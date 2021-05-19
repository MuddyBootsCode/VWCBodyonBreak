import React from "react";
import { Route } from "react-router-dom";
import NotAuthorizedPage from "../pages/NotAuthorizedPage";

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...rest} {...props} />;
        } else {
          return <NotAuthorizedPage />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
