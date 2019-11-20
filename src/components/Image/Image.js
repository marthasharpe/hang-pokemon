import React from 'react';
import { connect } from 'react-redux';
import { setName, setImage, startGame } from '../../actions/actCreators'
import './Image.css';

const Image = (props) => {
        
    const fetchPokemon = () => {
        let number = Math.floor(Math.random() * 800);
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                props.setName(data.species.name);
                props.setImage(data.sprites.front_default);
            })
        props.startGame()
    };

    return(
        <div className='image-container'>
            <img
                className="image"
                alt="Pokemon"
                onClick={
                    props.gameStarted === false && props.gameOver === false ? fetchPokemon : null
                }
                style={
                    props.gameStarted === false && props.gameOver === false ? {cursor: 'pointer'} : {cursor: 'default'}
                }
                src={props.image}
            />
        </div>
    )
}

const mapStateToProps = ({ image, gameOver, gameStarted }) => ({
    //pokemonData,
    gameOver,
    gameStarted,
    image
})

const mapDispatchToProps = {
    //setPokemonData,
    setName,
    setImage,
    startGame,
}

export default connect(mapStateToProps, mapDispatchToProps)(Image);