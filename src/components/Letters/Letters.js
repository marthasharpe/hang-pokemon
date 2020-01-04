import React from 'react';
import { connect } from 'react-redux';
import { setImage, setGuess, addWrongGuess, addRightGuess, endGame, addWin, addLoss, changeLetters } from '../../actions/actCreators'
import hanged from './../../ash hanged.jpg';
import gotcha from './../../pokeball stars.jpg';
import Button from 'react-bootstrap/Button';

const letterButton = {
    width: "2.5rem",
    height: "2.5rem",
    margin: ".2rem",
    borderRadius: "1rem",
}

const letterContainer = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    maxWidth:620,
    margin:20
}

const Letters = (props) => {
    
    let pokemonName = props.name.split('');

    // check if guess is right or wrong
    const handleGuess = (e) => {
        let guessedLetter = e.target.id;
        let updatedLetters = [];
        props.setGuess(guessedLetter);
        
        if (!pokemonName.includes(guessedLetter)) {
            // handle wrong guess
            updatedLetters = props.letters.map(letter => {
                if (letter.name === guessedLetter) {
                    return { ...letter,
                    style: 'danger'}
                }
                return letter;
            })
            checkGameLost([...props.wrongGuesses]);
            props.addWrongGuess(guessedLetter);
        } else {
            // handle right guess
            updatedLetters = props.letters.map(letter => {
                if (letter.name === guessedLetter) {
                    return { ...letter,
                    style: 'success'}
                }
                return letter;
            })
            checkGameWon([...props.rightGuesses + guessedLetter]);
            props.addRightGuess(guessedLetter);
        }
        props.changeLetters(updatedLetters);
    }
    
    // check if all letters have been guessed
    const checkGameWon = (arr) => {
        if (pokemonName.every(letter => arr.includes(letter))) {
            props.setImage(gotcha);
            props.addWin();
            props.endGame();
        }
    }
    // check if 10 wrong letters have been guessed
   const checkGameLost = (arr) => {
        if (arr.length + 1 === 10) {
            props.setImage(hanged);
            props.addLoss();
            props.endGame();
        }
    }
    
    return(
        <div style={letterContainer}>
            {props.letters.map(letter => (
                <Button
                    id={letter.name}
                    key={letter.name}
                    variant={letter.style}
                    style={letterButton}
                    className={
                        props.gameOver === false && props.gameStarted === true ? null : "disabled"
                    }
                    onClick={
                        props.gameOver === false && props.gameStarted === true ? handleGuess : null
                    }
                >
                {letter.name}
                </Button>
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
    addLoss,
    changeLetters
}

const mapStateToProps = ({ name, wrongGuesses, rightGuesses, gameOver, gameStarted, letters }) => ({
    name,
    wrongGuesses,
    rightGuesses,
    gameOver,
    gameStarted,
    letters,
});

export default connect(mapStateToProps, mapDispatchToProps)(Letters);