const Colors = {
  normal: "#A4ACAF",
  fire: "#FD7D24",
  water: "#4592C4",
  grass: "#9BCC50",
  electric: "#EED535",
  ice: "#51C4E7",
  fighting: "#D56723",
  poison: "#B97FC9",
  ground: "#AB9842",
  flying: "#3DC7EF",
  psychic: "#F366B9",
  bug: "#729F3F",
  rock: "#A38C21",
  ghost: "#7B62A3",
  dark: "#707070",
  dragon: "#53A4CF",
  steel: "#9EB7B8",
  fairy: "#FDB9E9",
};

export const ColorType = (type) => {
  for (const color in Colors) {
    if (type === color) {
      return Colors[color];
    }
  }
};
