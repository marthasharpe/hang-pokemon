import React from 'react';
import './App.css';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonName from '../PokemonName/PokemonName';
import Letters from '../Letters/Letters';

function App() {
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
