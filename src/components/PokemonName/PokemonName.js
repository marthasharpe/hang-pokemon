import React from 'react';
import './PokemonName.css';
import { connect } from 'react-redux';

const PokemonName = (props) => {

    let nameLetters = props.name.split('');
    let nameData = [];
    
    for (let i=0; i<nameLetters.length; i++) {
        nameData.push(
            {
                nameLetter: nameLetters[i],
                id: nameLetters[i]+i,
                key: nameLetters[i]+i,
            }
        );
    }

    // reveal correctly-guessed letters
    for (let i=0; i<nameLetters.length; i++) {
        if (nameLetters[i].match(/[^a-z]/g) || nameLetters[i] === props.currentGuess) {
            document.getElementById(`${nameLetters[i]+i}`).classList.add('guessed-letter');
        }
    }

    return (
        <div className='name-container' id='pokemon-name'>
            {props.gameStarted ? nameData.map((item) => (
                <div className="letter-container" key={item.key}>
                    <p className="name-letter" id={item.id}>
                        {item.nameLetter}
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