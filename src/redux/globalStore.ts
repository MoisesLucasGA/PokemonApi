import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import {
  GetPokemonInitialState,
  GetPokemonReducer,
} from "./reducers/GetPokemonReducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export type RootState = {
  getPokemon: typeof GetPokemonInitialState;
};

export const store = configureStore({
  middleware: [sagaMiddleware],
  reducer: {
    getPokemon: GetPokemonReducer,
  },
});

sagaMiddleware.run(rootSaga);
