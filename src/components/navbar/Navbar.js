import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/thunks/auth";
import { Container, Header, Row } from "../shared/styles/layout";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
	const dispatch = useDispatch();

	const logOut = () => dispatch(logout());

	const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);

	return (
		<Header>
			<Container>
				<Row justify="flex-end">
					{isAdmin && <NavbarItem to="/admin" text="Admin panel" />}
					<NavbarItem to="/" text="Home" />
					<NavbarItem to="/adopt" text="Find a pet" />
					{isAuthenticated ? (
						<NavbarItem onClick={logOut} to="#" text="Logout"></NavbarItem>
					) : (
						<>
							<NavbarItem to="/register" text="Sign Up" />
							<NavbarItem to="/login" text="Sign In" />
						</>
					)}
				</Row>
			</Container>
		</Header>
	);
};

export default Navbar;
