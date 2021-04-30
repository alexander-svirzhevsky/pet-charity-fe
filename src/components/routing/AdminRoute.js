import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAdmin ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default AdminRoute;
