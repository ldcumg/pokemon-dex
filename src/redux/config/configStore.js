// import { persistStore, persistReducer } from "redux-persist";
// import storageSession from "redux-persist/lib/storage/session";
import { configureStore } from "@reduxjs/toolkit";
import selectPokemonSlice from "../slices/selectPokemonSlice";
import yCoordinateSlice from "../slices/yCoordinateSlice";

// const persistConfig = {
//   key: "root",
//   storage: storageSession,
//   whitelist: ["selectPokemon"],
// };

export const store = configureStore({
  reducer: {
    selectPokemon: selectPokemonSlice,
    yCoordinate: yCoordinateSlice,
  },
});

// export const store = configureStore(
//   persistReducer(persistConfig, {
//     reducer: {
//       selectPokemon: selectPokemonSlice,
//       yCoordinate: yCoordinateSlice,
//     },
//   })
// );

// export const persistor = persistStore(store);
