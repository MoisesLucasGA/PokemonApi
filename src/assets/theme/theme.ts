export const theme = {
  color: {
    white: "#FFFFFF",
    black: "#000000",
    background: "#131317",
    transparent: "#FFFFFF00",
    types: {
      bug: "#94BC4A",
      dark: "#736C75",
      dragon: "#6A7BAF",
      electric: "#E5C531",
      fairy: "#E397D1",
      fighting: "#CB5F48",
      fire: "#EA7A3C",
      flying: "#7DA6DE",
      ghost: "#846AB6",
      grass: "#71C558",
      ground: "#CC9F4F",
      ice: "#70CBD4",
      normal: "#AAB09F",
      poison: "#B468B7",
      psychic: "#E5709B",
      rock: "#B2A061",
      steel: "#89A1B0",
      water: "#539AE2",
    },
  },
} as const;

export type Pokemontypes =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "psychic"
  | "rock"
  | "steel"
  | "water";
