import React from "react";
import * as Styled from "./style";
import { Pokemontypes } from "../../../assets/theme/theme";

export interface TypeTagProps {
  type: Pokemontypes;
  isActive: boolean;
  onClick: (type: string) => void;
}

export const TypeTag: React.FC<TypeTagProps> = ({
  type,
  isActive,
  onClick,
}) => {
  return (
    <Styled.Container
      onClick={() => {
        onClick(type.toString());
      }}
      active={isActive}
      color={type}
    >
      {type}
    </Styled.Container>
  );
};
