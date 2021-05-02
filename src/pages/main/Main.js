import React from "react";
import styled from "styled-components";

import PetCharityVideo from "../../assets/video/petCharity.mp4";

const Video = styled.video`
	position: absolute;
	width: 100vw;
	height: 720px;
	object-fit: cover;
	z-index: -1;
`;

const Main = () => {
	return (
		<Video autoPlay loop muted>
			<source src={PetCharityVideo} type="video/mp4" />
		</Video>
	);
};

export default Main;
