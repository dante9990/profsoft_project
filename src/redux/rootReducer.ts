import { combineReducers } from "@reduxjs/toolkit";
import { authReducer as auth } from "./reducers";
import { certificateReducer as cert } from "./reducers";

export const rootReducer = combineReducers({ auth, cert });
