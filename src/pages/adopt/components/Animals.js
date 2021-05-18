import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";

import { getAnimals, setFilter } from "../../../redux/thunks/animal";
import { AnimalItem } from "./AnimalItem";
import {
	Container,
	List,
	Title,
} from "../../../components/shared/styles/layout";
import InfoNotFound from "../../../components/shared/notFound/InfoNotFound";

import Spinner from "../../../components/shared/spinner/Spinner";
import { colors } from "../../../components/shared/styles/global";
import Filter from "../../../components/shared/filter/Filter";

const Animals = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [filterCriteria, setFilterCriteria] = useState({
		currentPage: 1,
		pageSize: 10,
		sex: "",
		type: "",
	});

	const dispatch = useDispatch();

	const { animals, loading } = useSelector((state) => state.animal);

	const pageSize = 10;

	const onPageChange = (page) => {
		setCurrentPage(page);
		dispatch(getAnimals(page, pageSize, "", ""));
	};

	const onFiltersSubmit = ({ type, sex }) => {
		dispatch(getAnimals(currentPage, pageSize, type, sex));
	};

	useEffect(() => {
		dispatch(getAnimals(currentPage, pageSize, "", ""));
	}, [dispatch]);
	console.log(animals);
	console.log(loading);
	return (
		<Container>
			<Title color={colors.primary} textAlign="center">
				Animals
			</Title>
			{loading ? (
				<Spinner />
			) : (
				<>
					<Filter
						currentPage={currentPage}
						pageSize={pageSize}
						onFiltersSubmit={onFiltersSubmit}
					/>
					<List>
						<Pagination
							showQuickJumper
							onChange={onPageChange}
							defaultCurrent={1}
							current={currentPage}
							total={animals.count}
						/>
					</List>
					<List>
						{animals.length !== 0 ? (
							animals.animals.map((animal) => (
								<AnimalItem key={animal._id} animal={animal} />
							))
						) : (
							<p>Animals not found. Please, Try to refine your criteria</p>
						)}
					</List>
				</>
			)}
		</Container>
	);
};

export default Animals;
