import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAnimalById } from "../../redux/thunks/animal";
import { Container } from "../../components/shared/styles/layout";
import Spinner from "../../components/shared/spinner/Spinner";
import AnimalProfile from "./components/AnimalProfile";
import InfoNotFound from "../../components/shared/notFound/InfoNotFound";

const Profile = ({ match }) => {
	const dispatch = useDispatch();

	const { loading, profile } = useSelector((state) => state.animal);

	useEffect(() => {
		dispatch(getAnimalById(match.params.id));
	}, [dispatch, match.params.id]);

	return (
		<Container>
			{loading ? (
				<Spinner />
			) : profile === null ? (
				<InfoNotFound
					linkTo="/profile"
					text="there is no information about the profile of this pet"
				/>
			) : (
				<AnimalProfile profile={profile} />
			)}
		</Container>
	);
};

export default Profile;
