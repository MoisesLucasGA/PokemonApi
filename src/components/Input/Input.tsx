import { useState } from "react";
import * as Styled from "./styles";

interface InputProps {
  label?: string;
  placeholder?: string;
  maxLength?: number;
  type: "numeric" | "text" | "all";
  onchange: (text: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  maxLength,
  type,
  onchange,
}) => {
  const [text, setText] = useState("");

  const handleChange = (entryText: string) => {
    switch (type) {
      case "numeric":
        setText(entryText.replace(/\D/, ""));
        onchange(entryText.replace(/\D/, ""));
        break;

      case "text":
        setText(entryText.replace(/\d/, ""));
        onchange(entryText.replace(/\d/, ""));
        break;

      default:
        setText(entryText);
        onchange(entryText);
        break;
    }
  };

  return (
    <Styled.Container>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.Input
        placeholder={placeholder ?? ""}
        maxLength={maxLength}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        value={text}
      />
    </Styled.Container>
  );
};
