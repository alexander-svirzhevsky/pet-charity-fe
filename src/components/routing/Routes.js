import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Adopt from "../../pages/adopt/Adopt";
import Register from "../../components/auth/Register";
import Login from "../../components/auth/Login";
import Profile from "../../pages/profile/Profile";
import AdminRoute from "../../components/routing/AdminRoute";
import PrivateRoute from "../../components/routing/PrivateRoute";
import NotFound from "../../components/shared/notFound/NotFound";
import BreedType from "../../pages/admin/components/BreedType";
import AnimalForm from "../../pages/admin/components/AnimalForm";
import ProfileForm from "../../pages/admin/components/ProfileForm";
import AnimalList from "../../pages/admin/components/AnimalList";

const Admin = lazy(() => import("../../pages/admin/Admin"));

const Routes = () => {
  return (
    <Switch>
      <Route path="/register" component={Register} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/profile" component={Adopt} exact />
      <PrivateRoute path="/profile/:id" component={Profile} exact />
      <AdminRoute path="/admin" component={Admin} exact />
      <AdminRoute path="/admin/breed_type" component={BreedType} exact />
      <AdminRoute path="/admin/animal" component={AnimalForm} exact />
      <AdminRoute path="/admin/profile_form" component={ProfileForm} exact />
      <AdminRoute path="/animal" component={AnimalList} exact />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
