import React from "react";
import { Container, Row } from "../../components/shared/styles/layout";
import NavbarItem from "../../components/navbar/NavbarItem";

const Admin = () => {
  return (
    <Container>
      <Row fontSize="15px" fontWeight="700" flexDirection="column">
        <NavbarItem to="/admin/breed_type" text="Add breed & type" />
        <NavbarItem to="/admin/animal" text="Add animal" />
        <NavbarItem to="/admin/profile_form" text="Create animal profile" />
        <NavbarItem to="/animal" text="Delete animal" />
      </Row>
    </Container>
  );
};

export default Admin;
