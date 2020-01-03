import React from 'react';
//import './Letters.css';
import { connect } from 'react-redux';
import { setImage, setGuess, addWrongGuess, addRightGuess, endGame, addWin, addLoss } from '../../actions/actCreators'
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
    let nameLetters = props.name.split('');
    
    // check if guess is right or wrong
    const handleGuess = (e) => {
        let guessedLetter = e.target.id;
        let element = e.target;
        props.setGuess(guessedLetter);
        if (!nameLetters.includes(guessedLetter)) {
            element.classList.add('danger');
            checkGameLost([...props.wrongGuesses]);
            props.addWrongGuess(guessedLetter);
        } else {
            element.classList.add('success');
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
            {props.letters.map((item) => (
                <Button
                    id={item.letter}
                    key={item.letter}
                    variant={item.variant}
                    style={letterButton}
                    className={
                        props.gameOver === false && props.gameStarted === true ? null : "disabled"
                    }
                    onClick={
                        props.gameOver === false && props.gameStarted === true ? handleGuess : null
                    }
                >
                {item.letter}
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
    addLoss
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