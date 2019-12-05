import React from 'react';
import './App.css';
import Image from '../Image/Image';
import PokemonName from '../PokemonName/PokemonName';
import Letters from '../Letters/Letters';
import Reset from '../Reset/Reset';
import Score from '../score/Score';
import Signature from '../Signature/Signature';

const App = () => {

  return (
    <div className="App">
      <h1 className='title'>Hangémon</h1>
      <Image />
      <PokemonName />
      <Letters />
      <Reset />
      <Score />
      <Signature />
    </div>
  );
}

export default App;