import axios from "axios";
import { call, put } from "redux-saga/effects";
import * as actions from "../actions/GetPokemonActions";
import { Pokemon } from "../reducers/GetPokemonReducer";

export interface Response {
  success: boolean;
  error: string;
  data: Pokemon;
}

export const controller = async (payload: any): Promise<unknown> => {
  try {
    const result = (
      await axios.get("https://pokeapi.co/api/v2/pokemon/" + payload)
    ).data;

    const model: Pokemon = {
      id: result.id,
      name: result.name,
      sprite: result.sprites.front_default,
      types: result.types,
    };

    return { success: true, data: model, error: "" };
  } catch (error) {
    return { success: false, data: {}, error: error };
  }
};

export function* GetPokemonRequest({ payload }: any) {
  try {
    const result: Response = yield call(controller, payload);
    yield put(actions.GetPokemonSuccess(result.data));
  } catch (error) {
    yield put(actions.GetPokemonFailure(error));
  }
}
