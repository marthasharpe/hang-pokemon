import React, { useEffect } from 'react';
import './PokemonButton.css';
import { connect } from 'react-redux';
import { setPokemonData } from '../../actions/actCreators'

const PokemonButton = (props) => {
    
    useEffect(() => {
        fetchPokemon();
    })

    const fetchPokemon = () => {
        let number = Math.floor(Math.random() * 800);
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
            .then(res => res.json())
            .then(data => {
                props.setPokemonData({
                    image: data.sprites.front_default,
                    name: data.species.name,
                })
            })
    };

    return(
        <div className='button-container'>
            <img
                onClick={fetchPokemon}
                alt="Pokeball"
                className="pokeball"
                src='http://pngimg.com/uploads/pokeball/pokeball_PNG34.png'
            />
            <p className="text">
                New Pokemon
            </p>
        </div>
    )
}

const mapDispatchToProps = {
    setPokemonData
}

export default connect(null, mapDispatchToProps)(PokemonButton);