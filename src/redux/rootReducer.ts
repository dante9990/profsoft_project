import { combineReducers } from "redux";
import { authReducer as auth } from "./reducers";
import { certReducer as cert } from "./reducers";

export const rootReducer = combineReducers({ auth, cert });
