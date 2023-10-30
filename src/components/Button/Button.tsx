import * as Styled from "./styles";

interface ButtonProps {
  label: string;
  onclick: () => void;
  type: "Primary" | "Secundary";
}

export const Button: React.FC<ButtonProps> = ({ label, onclick }) => {
  return <Styled.Container onClick={onclick}>{label}</Styled.Container>;
};
