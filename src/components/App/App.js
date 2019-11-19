import React from 'react';
import './App.css';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonName from '../PokemonName/PokemonName';
import Letters from '../Letters/Letters';
import PokemonButton from '../PokemonButton/PokemonButton';

const App = () => {

  return (
    <div className="App">
      <h1>Hangémon</h1>
      <PokemonImage />
      <PokemonName />
      <Letters />
      <PokemonButton />
    </div>
  );
}

export default App;