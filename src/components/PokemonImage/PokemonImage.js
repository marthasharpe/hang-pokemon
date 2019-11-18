import React from 'react';
import './PokemonImage.css';
import { connect } from 'react-redux';
import { setPokemonData, startGame } from '../../actions/actCreators'

const PokemonImage = (props) => {
    
    const fetchPokemon = () => {
        let number = Math.floor(Math.random() * 800);
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
            .then(res => res.json())
            .then(data => {
                props.setPokemonData({
                    image: data.sprites.front_default,
                    nameLetters: data.species.name.split(''),
                })
            })
        props.startGame()
    };

    return(
        <div className='image-container'>
            <img
                className="image"
                alt="Pokemon"
                onClick={props.gameOver ? fetchPokemon : null}
                style={props.gameOver ? {cursor: 'pointer'} : {cursor: 'default'}}
                src={props.pokemonData.image}
            />
        </div>
    )
}

const mapStateToProps = ({ pokemonData, gameOver }) => ({
    pokemonData,
    gameOver
})

const mapDispatchToProps = {
    setPokemonData,
    startGame
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonImage);