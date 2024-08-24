const initialState = 0;

const SET_Y = "SET_Y";

export const setY = (payload) => {
  return { type: SET_Y, payload };
};

const yCoordinate = (state = initialState, action) => {
  switch (action.type) {
    case "SET_Y":
      return action.payload;
    default:
      return state;
  }
};

export default yCoordinate;
