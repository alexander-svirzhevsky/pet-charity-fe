import React from "react";

import AnimalTypeForm from "./components/AnimalTypeForm";
import AnimalBreedForm from "./components/AnimalBreedForm";
import AnimalForm from "./components/AnimalForm";
import { Container, Row } from "../../components/shared/styles/layout";

const Admin = () => {
	return (
		<Container>
			<Row justify="space-evenly" border="2px solid #efefef" padding="50px 0">
				<AnimalTypeForm />
				<AnimalBreedForm />
			</Row>
			<AnimalForm />
		</Container>
	);
};

export default Admin;
