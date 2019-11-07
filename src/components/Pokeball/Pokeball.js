import React from 'react';
import './Pokeball.css';
import { connect } from 'react-redux';
import { getPokemon } from '../../actions/actCreators'

const Pokeball = () => {

  return (
    <div className="pokeball-container">
      <div onClick={getPokemon}>
        <img id="pokeball" alt="pokeball" src="http://pngimg.com/uploads/pokeball/pokeball_PNG34.png"/>
      </div>
      <p>Release Pokemon</p>
    </div>
  );
}

const mapDispatchToProps = {
    getPokemon
}

export default connect(null, mapDispatchToProps)(Pokeball);