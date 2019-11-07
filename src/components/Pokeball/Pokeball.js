import React, { useEffect } from 'react';
import './Pokeball.css';
import { connect } from 'react-redux';
import { setImage, setName } from '../../actions/actCreators'

const Pokeball = () => {

    useEffect(() => {
        fetchPokemon();
    });

    const fetchPokemon = () => {
        let number = Math.floor(Math.random() * 800);
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
            .then(res => res.json())
            .then(data => {
                console.log(data.species.name);
                setImage(data.sprites.front_default);
                setName(data.species.name);
            })
    };

  return (
    <div className="pokeball-container">
      <div onClick={fetchPokemon}>
        <img
            id="pokeball"
            alt="pokeball"
            src="http://pngimg.com/uploads/pokeball/pokeball_PNG34.png"
            />
      </div>
      <p>Release Pokemon</p>
    </div>
  );
}

const mapDispatchToProps = {
    setImage,
    setName,
}

export default connect(null, mapDispatchToProps)(Pokeball);