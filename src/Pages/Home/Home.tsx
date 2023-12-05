import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../components/Input/Input";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { GetPokemonRequest } from "../../redux/actions/GetPokemonActions";
import { RootState } from "../../redux/globalStore";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { TypeSelector } from "../../components/TypeSelector/TypeSelector";

export const Home = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  const { data } = useSelector((state: RootState) => state.getPokemon);

  return (
    <>
      <Input
        type="numeric"
        maxLength={4}
        label="Número da Pokédex"
        onchange={(value) => {
          setText(value);
        }}
      />
      <Button
        label="Buscar"
        onclick={() => {
          dispatch(GetPokemonRequest(text));
        }}
        type="Primary"
      ></Button>
      {data !== null ? (
        <PokemonCard name={data.name} sprite={data.sprite} types={data.types} />
      ) : null}
      <TypeSelector></TypeSelector>
    </>
  );
};
