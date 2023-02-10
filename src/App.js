import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;

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

  /* Custom hook - Screen */
  return (
    <div className="App">
      <header className="App-header">
        {
          isLoading ? (
            <></>
          ) : (

            <div>
              {/* Head container */}
              <p>
              <label>{pokemon.name}</label>
              </p>
              {/* Screen container */}
              <div>
                <img src={pokemon.sprites.front_default} className="App-logo" alt="logo" />
              </div>
              <div>
                <p>Weight</p>
                <p>{pokemon.weight}</p>
                <label>Abilities</label>
                { pokemon.abilities.map((item, index) =>
                  <div key={index}>
                    <label>{item.ability.name}</label>
                  </div> 
                )}
                </div>
                {/* Info container */}
                <div>
                <button
                    onClick={()=> getPokemon(currentId > 1 ? currentId - 1 : currentId)}>
                      Previous
                  </button>
                  <button
                    onClick={()=> getPokemon(currentId + 1)}>
                      Next
                  </button>
                </div>
            </div>
          )
        }


      </header>
    </div>
  );
}

export default App;
