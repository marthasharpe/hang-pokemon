import React from 'react';
import './PokemonName.css';
import { connect } from 'react-redux';

const PokemonName = (props) => {

    // // reveal correctly-guessed letters
    // for (let i=0; i<props.name.length; i++) {
    //     if (props.name[i].match(/[^a-z]/g) || props.name[i] === props.currentGuess) {
    //         document.getElementById(`${props.name[i]+i}`).classList.add('guessed-letter');
    //     }
    // }

    return (
        <div className='name-container' id='pokemon-name'>
            {props.gameStarted ? props.name.map((letter, index) => (
                <div className="letter-container" key={letter.id+index}>
                    <p className={letter.classList.join(' ')} id={letter.id+index}>
                        {letter.id}
                    </p>
                </div>
            )) : <p>Click to Start</p>}
        </div>
    )
}

const mapStateToProps = ({ name, currentGuess, gameStarted }) => ({
    name,
    currentGuess,
    gameStarted
})

export default connect(mapStateToProps, null)(PokemonName);