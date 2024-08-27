import { createSlice } from "@reduxjs/toolkit";

export const STR_POKE_BALL = {
  korean_name: "포켓볼",
};

const createPokeBall = (id) => {
  return { ...STR_POKE_BALL, id };
};

const initialState = Array.from({ length: 6 }, () =>
  createPokeBall(crypto.randomUUID())
);

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
      state.splice(action.payload, 1);
      state.push(createPokeBall(crypto.randomUUID()));
      return state
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { add, remove, reset } = selectPokemonSlice.actions;
export default selectPokemonSlice.reducer;
