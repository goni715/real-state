import {configureStore} from "@reduxjs/toolkit";
import houseSliceReducer from "../features/house/houseSlice.js";

const store = configureStore({
    reducer: {
        house: houseSliceReducer,
    },
})


export default store;