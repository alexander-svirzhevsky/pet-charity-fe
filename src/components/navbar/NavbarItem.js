import React from "react";

import { Navigation } from "../shared/styles/navbar/navigation";

const NavbarItem = ({ to, text, onClick }) => {
  return (
    <Navigation onClick={onClick} to={to}>
      {text}
    </Navigation>
  );
};

export default NavbarItem;
