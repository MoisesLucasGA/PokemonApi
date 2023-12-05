import styled from "styled-components";
import { theme } from "../../assets/theme/theme";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 256px;
  width: 177px;
  justify-content: center;
  align-content: center;
  background-color: ${theme.color.transparent};
  border: 1px solid white;
  border-radius: 15px;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  text-transform: uppercase;
  z-index: 2;
`;
export const Sprite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    z-index: 2;
  }
`;

export const SpriteBG = styled.div<{ type: string }>`
  position: absolute;
  box-shadow: ${({ theme, type }) =>
    `0px 0px 48px 48px ${theme.color.types[type]};`}
  z-index: 1;
`;

export const TypesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 16px;
  z-index: 2;
`;
