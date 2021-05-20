import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Row } from "../../components/shared/styles/layout";
import NavbarItem from "../../components/navbar/NavbarItem";

import AdminRoute from "../../components/routing/AdminRoute";
import BreedType from "../../pages/admin/components/BreedType";
import AnimalForm from "../../pages/admin/components/AnimalForm";
import ProfileForm from "../../pages/admin/components/ProfileForm";
import AnimalList from "../../pages/admin/components/AnimalList";

const Admin = () => {
  return (
    <Container>
      <Row fontSize="15px" fontWeight="700" flexDirection="column">
        <NavbarItem to="/admin/breed_type" text="Add breed & type" />
        <NavbarItem to="/admin/animal" text="Add animal" />
        <NavbarItem to="/admin/profile_form" text="Create animal profile" />
        <NavbarItem to="/animal" text="Delete animal" />
      </Row>
      {/* <Switch>
        <AdminRoute path="/admin/breed_type" component={BreedType} exact />
        <AdminRoute path="/admin/animal" component={AnimalForm} exact />
        <AdminRoute path="/admin/profile_form" component={ProfileForm} exact />
        <AdminRoute path="/animal" component={AnimalList} exact />
      </Switch> */}
    </Container>
  );
};

export default Admin;
