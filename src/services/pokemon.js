const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;

export const getPokemonById = async (currentId) => {
  const response = await fetch(`${pokeApiDomain}${currentId}`);
  const pokemon = await response.json();
  return pokemon;
};

export const getType = async (url) => {
  const response = await fetch(`${url}`);
  const type = await response.json();
  return type;
};
