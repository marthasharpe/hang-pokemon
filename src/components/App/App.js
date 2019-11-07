import React from 'react';
import './App.css';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonName from '../PokemonName/PokemonName';
import Letters from '../Letters/Letters';
import Pokeball from '../Pokeball/Pokeball';

const App = () => {

  return (
    <div className="App">
      <h1>Hang-emon</h1>
      <Pokeball />
      <PokemonImage />
      <PokemonName />
      <Letters />
    </div>
  );
}

export default App;