import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAnimals } from "../../../redux/thunks/animal";
import { AnimalItem } from "./AnimalItem";
import {
	Container,
	List,
	Title,
} from "../../../components/shared/styles/layout";

import Spinner from "../../../components/shared/spinner/Spinner";

const Animals = () => {
	const dispatch = useDispatch();

	const { animals, loading } = useSelector((state) => state.animal);

	useEffect(() => {
		dispatch(getAnimals());
	}, [dispatch]);

	return (
		<Container>
			<Title color="#002169">Animals</Title>
			{loading ? (
				<Spinner />
			) : !loading && animals.length === 0 ? (
				<span>No animals found</span>
			) : (
				<List>
					{animals.map((animal) => (
						<AnimalItem key={animal._id} animal={animal} />
					))}
				</List>
			)}
		</Container>
	);
};

export default Animals;
