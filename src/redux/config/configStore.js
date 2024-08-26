import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import selectPokemonSlice from "../slices/selectPokemonSlice";
import yCoordinateSlice from "../slices/yCoordinateSlice";

const reducers = combineReducers({
  selectPokemon: selectPokemonSlice,
  yCoordinate: yCoordinateSlice,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["selectPokemon"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
