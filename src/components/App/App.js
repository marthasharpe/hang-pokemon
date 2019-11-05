import React, { useEffect } from 'react';
import './App.css';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonName from '../PokemonName/PokemonName';
import Letters from '../Letters/Letters';
import { connect } from 'react-redux';
import { setName } from '../../actions/actCreators'

const App = () => {

  const fetchPokemon = () => {
    let randomNumber = Math.floor(Math.random() * 800);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
      .then(response => response.json())
      .then(data => {
        console.log(data.sprites.front_default);
        setName(data.species.name);
      })
    }

  useEffect(() => {
    fetchPokemon();
  });

  return (
    <div className="App">
      <h1>Catch-A-Pokemon</h1>
      <div onClick={fetchPokemon}>
        <img id="pokeball" alt="pokeball" src="http://pngimg.com/uploads/pokeball/pokeball_PNG34.png"/>
      </div>
      <p>Release Pokemon</p>
      <PokemonImage />
      <PokemonName />
      <Letters />
    </div>
  );
}

// const mapStateToProps = ({ name }) => ({
//   name
// })

const mapDispatchToProps = {
    setName
}

export default connect(null, mapDispatchToProps)(App);
// export default App;