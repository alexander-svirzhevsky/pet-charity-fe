import axios from "axios";
import {
	GET_ANIMALS,
	ANIMALS_ERROR,
	GET_ANIMAL,
	ANIMAL_DELETED,
	SET_FILTER,
	ANIMAL_LOADING,
	CLEAR_PROFILE,
} from "../actions/types";

export const getAnimals =
	(currentPage, pageSize, type, sex) => async (dispatch) => {
		dispatch({ type: ANIMAL_LOADING });

		try {
			const res = await axios.get(
				`/api/animal?page=${currentPage}&limit=${pageSize}&type=${type}&sex=${sex}`
			);

			dispatch({
				type: GET_ANIMALS,
				payload: {
					animals: res.data.data,
				},
			});
		} catch (err) {
			dispatch({
				type: ANIMALS_ERROR,
			});
		}
	};

export const setFilter = (type) => async (dispatch) => {
	dispatch({
		type: SET_FILTER,
		payload: { type },
	});
};

export const getAnimalById = (animalId) => async (dispatch) => {
	dispatch({
		type: CLEAR_PROFILE,
	});
	dispatch({
		type: ANIMAL_LOADING,
	});

	try {
		const res = await axios.get(`/api/profile/${animalId}`);

		dispatch({
			type: GET_ANIMAL,
			payload: res.data.data,
		});
	} catch (err) {
		dispatch({
			type: ANIMALS_ERROR,
		});
	}
};

export const deleteAnimal = (id) => async (dispatch) => {
	if (window.confirm("Are you sure? This can not be undone!")) {
		try {
			await axios.delete(`api/animal/${id}`);

			dispatch({
				type: ANIMAL_DELETED,
				payload: id,
			});
		} catch (err) {
			dispatch({
				type: ANIMALS_ERROR,
			});
		}
	}
};
