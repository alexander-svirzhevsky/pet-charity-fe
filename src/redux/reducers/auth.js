import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from "../actions/types";

const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	user: null,
	loading: true,
	isAdmin: false,
};

export default function AuthReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				user: payload,
				loading: false,
				isAdmin: payload.data.isAdmin,
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCCESS:
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case LOGOUT:
			return {
				...state,
				isAuthenticated: false,
				token: null,
				isAdmin: false,
			};

		default:
			return state;
	}
}
