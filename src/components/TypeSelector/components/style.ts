import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";

export const Container = styled.div<{ color: string; active: boolean }>`
  display: flex;
  height: 24px;
  width: 72px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.color.white};
  border-radius: 15px;
  background: ${({ color, theme, active }) =>
    active ? theme.color.types[color] : "transparent"};
  cursor: pointer;
  box-shadow: 2px 2px 3px ${theme.color.black};
  transform: ${({ active }) => (active ? "scale(1.1)" : "none")};
  &:hover {
    background: ${({ color, theme }) => theme.color.types[color]};
  }
`;
