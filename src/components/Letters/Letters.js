import React, { useState } from 'react';
import './Letters.css';
import { connect } from 'react-redux';
import { setGuess, addWrongGuess, addRightGuess, endGame } from '../../actions/actCreators'

const Letters = (props) => {
    const [ text, setText ] = useState(null)
    let nameLetters = props.pokemonData.nameLetters;
    
    // check if guess is right or wrong
    const handleGuess = (e) => {
        let guessedLetter = e.target.id;
        let element = e.target;
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
    
    // check if all letters have been guessed
    const checkGameWon = (arr) => {
        if (nameLetters.every(letter => arr.includes(letter))) {
            setText(
                <h2 className="green-text">
                    You caught it!
                </h2>
            );
            props.endGame();
        }
    }
    // check if 10 wrong guesses have been made
   const checkGameLost = (arr) => {
        if (arr.length + 1 === 10) {
            setText(
                <h2 className="red-text">
                    It got away!
                </h2>
            );
            props.endGame();
        }
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = alphabet.split('');
    const letterData = letters.map(item => (
        {
            letter: item,
            id: item,
            className: "letter-button",
            key: item,
        }
    ));
    
    return(
        <div className='letters-container'>
            {letterData.map((item) => (
                <button
                    className={item.className}
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
        </div>
    )
}

const mapDispatchToProps = {
    setGuess,
    addWrongGuess,
    addRightGuess,
    endGame,
}

const mapStateToProps = ({ pokemonData, wrongGuesses, rightGuesses, gameOver, gameStarted }) => ({
    pokemonData,
    wrongGuesses,
    rightGuesses,
    gameOver,
    gameStarted,
});

export default connect(mapStateToProps, mapDispatchToProps)(Letters);