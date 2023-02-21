import { useEffect, useState } from "react";

const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;

export const usePokemon = () => {
  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [weaknesses, setWeaknesses] = useState([]);

  const GetWeaknesses = (types) => {
    let doubleDamageFrom = [];
    let halfDamageFrom = [];
    let weaknesses = [];

    for (let i = 0; i < types.length; i++) {
      fetch(`${types[i].type.url}`)
        .then((response) => response.json())
        .then((type) => {
          for (let j = 0; j < type.damage_relations.double_damage_from.length;j++) {
            doubleDamageFrom.push(
              type.damage_relations.double_damage_from[j].name
            );
          }

          for (let j = 0;j < type.damage_relations.half_damage_from.length;j++) {
            halfDamageFrom.push(type.damage_relations.half_damage_from[j].name);
          }

          for (let j = 0;j < type.damage_relations.no_damage_from.length;j++) {
            halfDamageFrom.push(type.damage_relations.no_damage_from[j].name);
          }

          if (i === 1 || types.length === 1) {
            for (let i = 0; i < doubleDamageFrom.length; i++) {
              if (!halfDamageFrom.includes(doubleDamageFrom[i])) {
                weaknesses.push(doubleDamageFrom[i]);
              }
            }
            const dataArr = new Set(weaknesses);
            let result = [...dataArr];
            setWeaknesses(result);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`${pokeApiDomain}${currentId}`)
      .then((response) => response.json())
      .then((pokemonData) => {
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);
        GetWeaknesses(pokemonData.types);
        setIsLoading(false);
      });
  }, [currentId]);

  const getPokemon = (id) => {
    setCurrentId(id);
  };

  return [currentId, isLoading, pokemon, weaknesses, getPokemon];
};
