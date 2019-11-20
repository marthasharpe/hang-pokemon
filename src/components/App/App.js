import React from 'react';
import './App.css';
import Image from '../Image/Image';
import PokemonName from '../PokemonName/PokemonName';
import Letters from '../Letters/Letters';
import Reset from '../Reset/Reset';

const App = () => {

  return (
    <div className="App">
      <h1 className='title'>Hangémon</h1>
      <Image />
      <PokemonName />
      <Letters />
      <Reset />
    </div>
  );
}

export default App;