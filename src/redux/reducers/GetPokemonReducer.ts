import { AnyAction } from "redux";
import * as types from "../types/GetPokemonTypes";

interface ttype {
  name: string;
  url: string;
}

export interface PokemonType {
  type: ttype;
}

export interface Pokemon {
  name: string;
  id: number;
  sprite: string;
  types: PokemonType[];
}

export const GetPokemonInitialState = {
  success: false,
  load: false,
  data: null as unknown as Pokemon,
  error: "",
};

export const GetPokemonReducer = (
  state = GetPokemonInitialState,
  action: AnyAction,
) => {
  const newState = { ...state };

  switch (action.type) {
    case types.GET_POKEMON_REQUEST:
      newState.load = true;
      newState.error = "";
      newState.success = false;
      newState.data = null as unknown as Pokemon;
      return newState;

    case types.GET_POKEMON_SUCCESS:
      newState.load = false;
      newState.success = true;
      newState.data = action.payload;
      return newState;

    case types.GET_POKEMON_FAILURE:
      newState.load = false;
      newState.success = false;
      newState.data = null as unknown as Pokemon;
      newState.error = action.payload;
      return newState;

    case types.GET_POKEMON_RESET:
      newState.load = false;
      newState.success = false;
      newState.data = null as unknown as Pokemon;
      newState.error = "";
      return newState;

    default:
      return { ...state };
  }
};
