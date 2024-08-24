const initialState = new Array(6).fill("pokeBall");

const ADD = "ADD";
const REMOVE = "REMOVE";

export const add = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

export const remove = (payload) => {
  return {
    type: REMOVE,
    payload,
  };
};

const selectPokemon = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return state.map((item, index) => {
        if (index === action.payload.pokeBallIndex)
          return action.payload.newPokemon;
        return item;
      });
    case "REMOVE":
      return state.map((pokemon) => {
        if (pokemon.id === action.payload) return "pokeBall";
        return pokemon;
      });
    case "RESET":
      return new Array(6).fill("pokeBall");
    default:
      return state;
  }
};

export default selectPokemon;
