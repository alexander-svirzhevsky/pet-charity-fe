import { combineReducers } from "redux";

import auth from "./auth";
import animal from "./animal";

export default combineReducers({ auth, animal });
