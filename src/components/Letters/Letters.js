import React, { useState } from 'react';
import './Letters.css';
import { connect } from 'react-redux';
import { setGuess, reset, addWrongGuess, addRightGuess, endGame } from '../../actions/actCreators'

const Letters = (props) => {
    const [ text, setText ] = useState('')
    let nameLetters = props.pokemonData.nameLetters;
    
    // check if guess is right or wrong
    const handleGuess = (e) => {
        let guessedLetter = e.target.id;
        let element = document.getElementById(guessedLetter);
        props.setGuess(guessedLetter);
        if (!nameLetters.includes(guessedLetter)) {
            element.classList.add('wrong-guess');
            checkGameLost([...props.wrongGuesses]);
            props.addWrongGuess(guessedLetter);
        } else {
            element.classList.add('right-guess');
            checkGameWon([...props.rightGuesses + guessedLetter]);
            props.addRightGuess(guessedLetter);
        }
    }
    
    // reveal correctly-guessed letters
    for (let i=0; i<nameLetters.length; i++) {
        if (nameLetters[i].match(/[^a-z]/g) || nameLetters[i] === props.currentGuess) {
            document.getElementById(`${nameLetters[i]+i}`).classList.add('guessed-letter');
        }
    }
    
    // // when game ends, reset letters and state
    const reset = () => {
        props.wrongGuesses.forEach(item => document.getElementById(item).classList.remove('wrong-guess'))
        props.rightGuesses.forEach(item => document.getElementById(item).classList.remove('right-guess'))
        props.reset();
        setText('');
    }
    
    // check if all letters have been guessed
    const checkGameWon = (arr) => {
        if (nameLetters.every(letter => arr.includes(letter))) {
            setText('You caught it!');
            props.endGame();
        }
    }
    // check if 10 wrong guesses have been made
   const checkGameLost = (arr) => {
        if (arr.length + 1 === 10) {
            setText('It got away!');
            props.endGame();
        }
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = alphabet.split('');
    const letterData = letters.map(item => (
        {
            letter: item,
            id: item,
            key: item
        }
    ));
    
    return(
        <div className='letters-container'>
            {letterData.map((item) => (
                <button
                    className="letter-button"
                    id={item.id}
                    key={item.key}
                    style={
                        props.gameOver === false && props.gameStarted === true ? {cursor: 'pointer'} : {cursor: 'default'}
                    }
                    onClick={
                        props.gameOver === false && props.gameStarted === true ? handleGuess : null
                    }
                    >
                {item.letter}
                </button>
            ))}
            <div className='button-container'>
                <h2 className="text">
                    {text}
                </h2>
                <button className="reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    setGuess,
    addWrongGuess,
    addRightGuess,
    reset,
    endGame,
}

const mapStateToProps = ({ pokemonData, currentGuess, wrongGuesses, rightGuesses, gameOver, gameStarted }) => ({
    pokemonData,
    currentGuess,
    wrongGuesses,
    rightGuesses,
    gameOver,
    gameStarted
});

export default connect(mapStateToProps, mapDispatchToProps)(Letters);