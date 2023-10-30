import { all, takeLatest } from "redux-saga/effects";
import { GET_POKEMON_REQUEST } from "./types/GetPokemonTypes";
import { GetPokemonRequest } from "./saga/GetPokemonSaga";

export function* rootSaga(): Generator {
  return yield all([takeLatest<any>(GET_POKEMON_REQUEST, GetPokemonRequest)]);
}
