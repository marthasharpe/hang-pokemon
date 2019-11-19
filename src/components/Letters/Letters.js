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
    
    // when game ends, reset letters and state
    const reset = () => {
        props.wrongGuesses.forEach(item => document.getElementById(item).classList.remove('wrong-guess'))
        props.rightGuesses.forEach(item => document.getElementById(item).classList.remove('right-guess'))
        props.reset();
    }
    
    // check if all letters have been guessed
    const checkGameWon = (arr) => {
        if (nameLetters.every(letter => arr.includes(letter))) {
            alert('you win');
            props.endGame();
            //reset();
        }
    }
    // check if 10 wrong guesses have been made
   const checkGameLost = (arr) => {
        if (arr.length + 1 === 10) {
            alert('you lose');
            props.endGame();
            //reset();
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
                    style={props.gameOver ? {cursor: 'default'} : {cursor: 'pointer'}}
                    onClick={props.gameOver ? null : handleGuess}
                    >
                {item.letter}
                </button>
            ))}
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