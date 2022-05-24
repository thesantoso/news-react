import { configureStore } from "@reduxjs/toolkit"
import { newsReducer } from "./Reducers"

export const store = configureStore({
    reducer:{
        news : newsReducer
    }
})