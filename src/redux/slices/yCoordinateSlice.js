import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const yCoordinateSlice = createSlice({
  name: "yCoordinate",
  initialState,
  reducers: {
    setY: (_, action) => action.payload,
  },
});

export const { setY } = yCoordinateSlice.actions;
export default yCoordinateSlice.reducer;
