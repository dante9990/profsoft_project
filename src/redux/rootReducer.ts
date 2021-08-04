import {combineReducers} from '@reduxjs/toolkit'
import {authReducer as auth} from "./reducers";

export const rootReducer = combineReducers({auth})