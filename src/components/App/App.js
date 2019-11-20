import React from 'react';
import './App.css';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonName from '../PokemonName/PokemonName';
import Letters from '../Letters/Letters';
import Reset from '../Reset/Reset';

const App = () => {

  return (
    <div className="App">
      <h1 className='title'>Hangémon</h1>
      <PokemonImage />
      <PokemonName />
      <Letters />
      <Reset />
    </div>
  );
}

export default App;