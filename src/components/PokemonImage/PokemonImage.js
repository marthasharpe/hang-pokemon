import React from 'react';
import './PokemonImage.css';
import { connect } from 'react-redux';
//import {  } from '../actions/actCreators'

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

// const mapDispatchToProps = {
//     switchSession,
//     switchBreak,
//     decSeconds
// }

export default connect(mapStateToProps, null)(PokemonImage);