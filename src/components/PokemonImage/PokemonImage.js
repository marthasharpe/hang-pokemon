import React from 'react';
import './PokemonImage.css';
import { connect } from 'react-redux';
//import { setPokemonData } from '../../actions/actCreators'

const PokemonImage = (props) => {
    
    // const fetchPokemon = () => {
    //     let number = Math.floor(Math.random() * 800);
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
    //         .then(res => res.json())
    //         .then(data => {
    //             props.setPokemonData({
    //                 image: data.sprites.front_default,
    //                 name: data.species.name,
    //             })
    //         })
    // };

    return(
        <div className='image-container'>
            <img className="image" alt="Pokemon" src={props.pokemonData.image}/>
        </div>
    )
}

const mapStateToProps = ({ pokemonData }) => ({
    pokemonData
})

export default connect(mapStateToProps, null)(PokemonImage);