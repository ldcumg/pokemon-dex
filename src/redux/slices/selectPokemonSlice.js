import { createSlice } from "@reduxjs/toolkit";

export const strPokeBall = "pokeBall";

const initialState = new Array(6).fill(strPokeBall);

const selectPokemonSlice = createSlice({
  name: "selectPokemon",
  initialState,
  reducers: {
    add: (state, action) => {
      return state
        .map((item, index) => {
          if (index === action.payload.pokeBallIndex)
            return action.payload.newPokemon;
          return item;
        })
        .sort();
    },
    remove: (state, action) => {
      return state
        .map((pokemon) => {
          if (pokemon.id === action.payload) return strPokeBall;
          return pokemon;
        })
        .sort();
    },
    reset: () => {
      return new Array(6).fill(strPokeBall);
    },
  },
});

export const { add, remove, reset } = selectPokemonSlice.actions;
export default selectPokemonSlice.reducer;
