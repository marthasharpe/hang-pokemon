import React from 'react';
import './Letters.css';
import { connect } from 'react-redux';
import { setGuess, reset, addWrongGuess, addRightGuess, endGame } from '../../actions/actCreators'

const Letters = (props) => {
    let nameLetters = props.pokemonData.nameLetters;
    
    // check if guess is right or wrong
    const handleGuess = (e) => {
        let guessedLetter = e.target.id;
        let element = document.getElementById(guessedLetter);
        props.setGuess(guessedLetter);
        if (!nameLetters.includes(guessedLetter)) {
            element.classList.add('wrong-guess');
            props.addWrongGuess(guessedLetter);
            checkGameEnd();
        } else {
            element.classList.add('right-guess');
            props.addRightGuess(guessedLetter);
            checkGameEnd();
        }
    }
    
    // check if all letters have been guessed or if max wrong guesses has been reached
    const checkGameEnd = () => {
        if (nameLetters.every(letter => props.rightGuesses.includes(letter))) {
            console.log('you win');
            props.endGame();
        } else if (props.wrongGuesses.length === 10) {
            console.log('you lose');
            props.endGame();
        } else {
            return;
        }
    }

    // reveal correctly-guessed letters
    for (let i=0; i<nameLetters.length; i++) {
        if (nameLetters[i].match(/[^a-z]/g) || nameLetters[i] === props.currentGuess) {
            document.getElementById(`${nameLetters[i]+i}`).classList.add('guessed-letter');
        }
    }

    // when game ends, reset letters and state
    if (props.gameOver) {
        //const reset = () => {
        props.wrongGuesses.forEach(item => document.getElementById(item).classList.remove('wrong-guess'))
        props.rightGuesses.forEach(item => document.getElementById(item).classList.remove('right-guess'))
        props.reset();
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
                    onClick={handleGuess}
                    >
                {item.letter}
                </button>
            ))}
            <button onClick={reset}>Reset</button>
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

const mapStateToProps = ({ pokemonData, currentGuess, wrongGuesses, rightGuesses, gameOver }) => ({
    pokemonData,
    currentGuess,
    wrongGuesses,
    rightGuesses,
    gameOver,
});

export default connect(mapStateToProps, mapDispatchToProps)(Letters);