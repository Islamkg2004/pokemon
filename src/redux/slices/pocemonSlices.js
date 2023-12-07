import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {link} from "./link/link";

const initialState = {
    pokemons: [],
    load: true
}

export const getPokemons = createAsyncThunk('pokemons', async (params)=>{
    const {data} = await axios.get(link.BaseUrl, {params: params})
    console.log(data)
    return data
})

const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPokemons.pending, (state) => {
                state.load = true
            })
            .addCase(getPokemons.fulfilled, (state, action) => {
                state.pokemons = action.payload
                state.load = false
            })
            .addCase(getPokemons.rejected, () => {
                alert('error')
            })
    }
})

export default pokemonSlice.reducer;

export const pokeState = state => state.pockemonsSlices;