import React from 'react';
import './Letters.css';
import { connect } from 'react-redux';
import { setImage, setGuess, addWrongGuess, addRightGuess, endGame, addWin, addLoss } from '../../actions/actCreators'
import hanged from './../../ash hanged.jpg';
import gotcha from './../../pokeball stars.jpg';

const Letters = (props) => {
    let nameLetters = props.name.split('');
    
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
            props.setImage(gotcha);
            props.addWin();
            props.endGame();
        }
    }
    // check if 10 wrong guesses have been made
   const checkGameLost = (arr) => {
        if (arr.length + 1 === 10) {
            props.setImage(hanged);
            props.addLoss();
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
    setImage,
    addWrongGuess,
    addRightGuess,
    endGame,
    addWin,
    addLoss
}

const mapStateToProps = ({ name, wrongGuesses, rightGuesses, gameOver, gameStarted }) => ({
    name,
    wrongGuesses,
    rightGuesses,
    gameOver,
    gameStarted,
});

export default connect(mapStateToProps, mapDispatchToProps)(Letters);