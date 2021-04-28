import { combineReducers } from "redux";

import auth from "./auth";
import animal from "./animal";
import admin from "./admin";

export default combineReducers({ auth, animal, admin });
