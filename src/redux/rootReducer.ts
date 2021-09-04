import { combineReducers } from "redux";
import { authReducer as auth } from "./reducers";
import { certReducer as cert } from "./reducers";
import { selectReducer as select } from "./reducers";

export const rootReducer = combineReducers({ auth, cert, select });
