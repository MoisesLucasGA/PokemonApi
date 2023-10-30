import * as types from "../types/GetPokemonTypes";

export const GetPokemonRequest = (payload: string) => ({
  type: types.GET_POKEMON_REQUEST,
  payload,
});

export const GetPokemonSuccess = (payload: unknown) => ({
  type: types.GET_POKEMON_SUCCESS,
  payload,
});

export const GetPokemonFailure = (payload: any) => ({
  type: types.GET_POKEMON_FAILURE,
  payload,
});

export const GetPokemonReset = () => ({
  type: types.GET_POKEMON_FAILURE,
});
