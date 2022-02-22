import { combineReducers } from "redux";
import { carsReducer } from "./cars/carsReducer";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({ cars: carsReducer });
