import { combineReducers } from "@reduxjs/toolkit";
import { authReducer as auth } from "./reducers";
import { certReducer as cert } from "./reducers";

export const rootReducer = combineReducers({ auth, cert });
