import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Adopt from "../../pages/adopt/Adopt";
import Register from "../../components/auth/Register";
import Login from "../../components/auth/Login";
import Profile from "../../pages/profile/Profile";
import AdminRoute from "../../components/routing/AdminRoute";
import PrivateRoute from "../../components/routing/PrivateRoute";
import ForgetPassword from "../auth/ForgotPassword/ForgetPassword";
import ResetPassword from "../auth/ForgotPassword/ResetPassword";
import NotFound from "../../components/shared/notFound/NotFound";

const Admin = lazy(() => import("../../pages/admin/Admin"));

const Routes = () => {
  return (
    <Switch>
      <Route path="/register" component={Register} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/profile" component={Adopt} exact />
      <PrivateRoute path="/profile/:id" component={Profile} exact />
      <AdminRoute path="/admin" component={Admin} />
      <Route path="/forgot-password" component={ForgetPassword} exact />
      <Route path="/resetpassword" component={ResetPassword} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
