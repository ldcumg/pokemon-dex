import { createSlice } from "@reduxjs/toolkit";

const initialState = new Array(6).fill("pokeBall");

const selectPokemonSlice = createSlice({
  name: "selectPokemon",
  initialState,
  reducers: {
    add: (state, action) => {
      return state.map((item, index) => {
        if (index === action.payload.pokeBallIndex)
          return action.payload.newPokemon;
        return item;
      });
    },
    remove: (state, action) => {
      return state.map((pokemon) => {
        if (pokemon.id === action.payload) return "pokeBall";
        return pokemon;
      });
    },
    reset: () => {
      return new Array(6).fill("pokeBall");
    },
  },
});

export const { add, remove, reset} =
  selectPokemonSlice.actions;
export default selectPokemonSlice.reducer;
