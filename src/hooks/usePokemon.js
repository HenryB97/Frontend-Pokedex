import { useEffect, useState } from "react";

const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;

export const usePokemon = () => {
    
    const[currentId, setCurrentId] = useState(1);
    const[pokemon, setPokemon] = useState({});
    const[isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {

        fetch(`${pokeApiDomain}${currentId}`)
            .then(response => response.json())
            .then(pokemonData => {
            console.log(pokemonData);
            setCurrentId(pokemonData.id);
            setPokemon(pokemonData);
            setIsLoading(false);
            })
    },[currentId]);
  
    const getPokemon = (id) => {
      setCurrentId(id);
    }

    return[currentId, isLoading, pokemon, getPokemon];
}