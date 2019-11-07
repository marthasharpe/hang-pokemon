import React from 'react';
import './App.css';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonName from '../PokemonName/PokemonName';
import Letters from '../Letters/Letters';
import Pokeball from '../Pokeball/Pokeball';
import { connect } from 'react-redux';
import { getPokemon } from '../../actions/actCreators'

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

// const mapStateToProps = ({ name }) => ({
//   name
// })

const mapDispatchToProps = {
    getPokemon
}

export default connect(null, mapDispatchToProps)(App);
// export default App;