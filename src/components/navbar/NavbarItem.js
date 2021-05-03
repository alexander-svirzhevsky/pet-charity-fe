import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled(Link)`
	margin-right: 10px;
	padding: 10px;
	padding: 20px 15px;
	transition: all 0.3s ease;
	&:hover {
		background-color: #00b8e0;
		color: #fff;
	}
`;

const NavbarItem = ({ to, text, onClick }) => {
	return (
		<Navigation onClick={onClick} to={to}>
			{text}
		</Navigation>
	);
};

export default NavbarItem;
