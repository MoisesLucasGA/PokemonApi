import React, { useState } from "react";
import { TypeTag } from "./components/TypeTag";
import * as Styled from "./styles";
import { Pokemontypes } from "../../assets/theme/theme";

export const TypeSelector: React.FC = () => {
  const types: Pokemontypes[] = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  const [selectedTypes, setSelectedtypes] = useState<string[]>([]);

  const handleClick = (type: string) => {
    if (selectedTypes.includes(type)) {
      const newTypes = selectedTypes.filter((oldTypes) => oldTypes !== type);
      setSelectedtypes(newTypes);
    } else if (selectedTypes.length === 0 || selectedTypes.length < 2) {
      setSelectedtypes([...selectedTypes, type]);
    } else {
      setSelectedtypes([selectedTypes[1], type]);
    }
  };

  return (
    <Styled.Container>
      {types.map((type) => {
        return (
          <TypeTag
            onClick={() => {
              handleClick(type.toString());
            }}
            isActive={selectedTypes.includes(type)}
            type={type}
          />
        );
      })}
    </Styled.Container>
  );
};
