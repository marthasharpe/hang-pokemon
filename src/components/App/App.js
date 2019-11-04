import React, { useEffect } from 'react';
import './App.css';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonName from '../PokemonName/PokemonName';
import Letters from '../Letters/Letters';

function App() {

  const fetchPokemon = () => {
    let randomNumber = Math.floor(Math.random() * 800);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
      .then(response => response.json())
      .then(data => {
        console.log(data.sprites.front_default);
        console.log(data.species.name);
      })
    }

  useEffect(() => {
    fetchPokemon();
  });

  return (
    <div className="App">
      <h1>Hang-Pokemon</h1>
      <PokemonImage />
      <PokemonName />
      <Letters />
    </div>
  );
}

export default App;
