import {configureStore} from "@reduxjs/toolkit";
import pockemonsSlices from "./slices/pocemonSlices";
import pockemonSlice from "./slices/pokemonSlice";

export const store = configureStore({
    reducer : {
        pockemonsSlices,
        pockemonSlice
    }
})