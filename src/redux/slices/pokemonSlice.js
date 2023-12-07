import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {link} from "./link/link";

const initialState = {
    pokemon: {},
    load: true
}

export const getPokemon = createAsyncThunk('pokemon', async (id)=>{
    const {data} = await axios.get(link.BaseUrl+id)
    console.log(data)
    return data
})

const pokemonnSlice = createSlice({
    name: 'pokemonnSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPokemon.pending, (state) => {
                state.load = true
            })
            .addCase(getPokemon.fulfilled, (state, action) => {
                state.pokemon = action.payload
                state.load = false
            })
            .addCase(getPokemon.rejected, () => {
                alert('error')
            })
    }
})

export default pokemonnSlice.reducer;

export const pokemonState = state => state.pockemonSlice;