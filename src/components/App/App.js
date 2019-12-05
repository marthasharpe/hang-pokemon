import React from 'react';
import './App.css';
import Image from '../Image/Image';
import PokemonName from '../PokemonName/PokemonName';
import Letters from '../Letters/Letters';
import Reset from '../Reset/Reset';
import Score from '../score/Score';

const App = () => {

  return (
    <div className="App">
      <h1 className='title'>Hangémon</h1>
      <Image />
      <PokemonName />
      <Letters />
      <Reset />
      <Score />
    </div>
  );
}

export default App;