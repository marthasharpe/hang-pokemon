import React from 'react';
import './PokemonName.css';
import { connect } from 'react-redux';

const PokemonName = (props) => {

    return (
        <div className='name-container' id='pokemon-name'>
            {props.gameStarted ? props.nameLetters.map((letter, index) => (
            <div className="letter-container" key={`${letter.id}-${index}`}>
                <p
                    className={letter.classList.join(' ')}
                    id={`${letter.id}-${index}`}
                    >
                    {letter.id}
                </p>
            </div>
        )) : <p>Click to Start</p>}
        </div>
    )
}

const mapStateToProps = ({ nameLetters, gameStarted }) => ({
    nameLetters,
    gameStarted
})

export default connect(mapStateToProps, null)(PokemonName);