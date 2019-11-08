import React from 'react';
import './PokemonImage.css';
import { connect } from 'react-redux';
import { setImage, setName } from '../../actions/actCreators'

const PokemonImage = (props) => {
    
    const fetchPokemon = () => {
        let number = Math.floor(Math.random() * 800);
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
            .then(res => res.json())
            .then(data => {
                props.setImage(data.sprites.front_default);
                props.setName(data.species.name);
            })
    };

    return(
        <div className='image-container'>
            <img onClick={fetchPokemon} className="image" alt="Pokemon" src={props.image}/>
        </div>
    )
}

const mapStateToProps = ({ image }) => ({
    image
})

const mapDispatchToProps = {
    setImage,
    setName,
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonImage);