import {combineReducers, configureStore} from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import productsSlice from "./productsSlice";

const rootReducer = combineReducers({
    users: usersSlice,
    products: productsSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})