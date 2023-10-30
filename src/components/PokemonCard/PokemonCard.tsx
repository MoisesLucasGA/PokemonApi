import { PokemonType } from "../../redux/reducers/GetPokemonReducer";
import * as Styled from "./styles";

interface PokemonCardProps {
  name: string;
  sprite: string;
  types: PokemonType[];
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  sprite,
  types,
}: PokemonCardProps) => {
  return (
    <Styled.Card>
      <Styled.Title>{name}</Styled.Title>
      <Styled.Sprite>
        <Styled.SpriteBG type={types[0].type.name} />
        <img src={sprite}></img>
      </Styled.Sprite>
      <Styled.TypesWrapper>
        {types.map((type, index: number) => {
          return <p key={index}>{type.type.name}</p>;
        })}
      </Styled.TypesWrapper>
    </Styled.Card>
  );
};
