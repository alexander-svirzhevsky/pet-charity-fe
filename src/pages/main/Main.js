import React from "react";
import styled from "styled-components";

import PetCharityVideo from "../../assets/video/petCharity.mp4";
import { Container, Title, SubTitle, Btn } from "../../components/shared/styles/layout"
import { colors } from "../../components/shared/styles/global"

const Video = styled.video`
	width: 100vw;
	object-fit: cover;
	z-index: -1;
`;

const Hero = styled.div`
	position: relative;
`;

const HeroContent = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 1000;
	width: 45%;
    padding: 22px;
    color: #002169;

	&:before {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		display: block;
		background-color: #1f1f1e;
		opacity: .5;
		border-radius: 50px;
	}
`;

const Main = () => {
	return (
		<Hero>
			<Video autoPlay loop muted>
				<source src={PetCharityVideo} type="video/mp4" />
			</Video>
			<Container>
				<HeroContent>
					<Title marginBottom="20px" lineHeight="1" fontSize="50px">Creating Unconditional Bonds</Title>
					<SubTitle marginBottom="20px" color={colors.white} >By supporting pets & those who love them</SubTitle>
					<Btn>get to know us</Btn>
				</HeroContent>
			</Container>
		</Hero>
	);
};

export default Main;
