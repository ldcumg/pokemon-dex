import { combineReducers, createStore } from "redux";
import selectPokemon from "../modules/selectPokemon";
import yCoordinate from "../modules/yCoordinate";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from 'redux-persist/lib/storage/session'

const rootReducer = combineReducers({
  selectPokemon,
  yCoordinate,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["selectPokemon"],
};

export const store = createStore(persistReducer(persistConfig, rootReducer));

export const persistor = persistStore(store);

