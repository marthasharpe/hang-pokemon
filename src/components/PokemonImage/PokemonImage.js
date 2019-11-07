import React from 'react';
import './PokemonImage.css';
import { connect } from 'react-redux';

const PokemonImage = ({ image }) => {

    return(
        <div className='image-container'>
            <img className="image" alt="Pokemon" src={image}/>
        </div>
    )
}

const mapStateToProps = ({ image }) => ({
    image
})

export default connect(mapStateToProps, null)(PokemonImage);