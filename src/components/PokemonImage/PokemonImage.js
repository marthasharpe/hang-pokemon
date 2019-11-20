import React, { useState } from 'react';
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

    const pokemon = (
        <img
            className="pokemon"
            alt="Pokemon"
            src={props.pokemonData.image}
        />
    )

    const pokeball = (
        <img
            className="pokeball"
            alt="Pokeball"
            onClick={fetchPokemon}
            src='http://pngimg.com/uploads/pokeball/pokeball_PNG34.png'
        />
    )

    const gameWon = (
        <h2 className="green-text">
            You caught it!
        </h2>
    )

    const gameLost = (
        <h2 className="red-text">
            It got away!
        </h2>
    )
    
    const [ image, setImage ] = useState(pokeball)

    const showPokeball = () => {
        setImage(pokeball)
    }

    const showPokemon = () => {
        setImage(pokemon)
    }
    
    const showGameOver = () => {
        setImage(gameWon);
        setImage(gameLost);
    }




    return(
        <div className='image-container'>
            {image}
            {/* <img
                className="image"
                alt="Pokemon"
                onClick={
                    props.gameStarted === false && props.gameOver === false ? fetchPokemon : null
                }
                style={
                    props.gameStarted === false && props.gameOver === false ? {cursor: 'pointer'} : {cursor: 'default'}
                }
                src={props.pokemonData.image}
            /> */}
        </div>
    )
}

const mapStateToProps = ({ pokemonData, gameOver, gameStarted }) => ({
    pokemonData,
    gameOver,
    gameStarted
})

const mapDispatchToProps = {
    setPokemonData,
    startGame
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonImage);