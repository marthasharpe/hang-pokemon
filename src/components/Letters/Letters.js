import React, { useState } from 'react';
import './Letters.css';
import { connect } from 'react-redux';
import { setGuess, reset, addWrongGuess, addRightGuess } from '../../actions/actCreators'

const Letters = (props) => {
    const [guessedLetters, setGuessedLetters] = useState([]);
    
    let nameLetters = props.pokemonData.nameLetters;
    
    const handleGuess = (e) => {
        let guessedLetter = document.getElementById(e.target.id);
        setGuessedLetters([...guessedLetters, guessedLetter]);
        checkLetter(guessedLetter);

    }
        // // check if all letters have been guessed
        // const checkWinGame = () => {
        //     if (nameLetters.every(letter => props.rightGuesses.includes(letter))) {
        //         alert('You win!');
        //         props.reset();
        //     }
        // }
    
        const checkLetter = (guessedLetter) => {
            if (!nameLetters.includes(guessedLetter)) {
                guessedLetter.classList.add('wrong-guess');
                props.addWrongGuess(guessedLetter);
            } else {
                guessedLetter.classList.add('right-guess');
                props.setGuess(guessedLetter);
                props.addRightGuess(guessedLetter);
            }
        }

        for (let i=0; i<nameLetters.length; i++) {
            if (nameLetters[i].match(/[^a-z]/g) || nameLetters[i] === props.currentGuess) {
                document.getElementById(`${nameLetters[i]+i}`).classList.add('guessed-letter');
            }
            //checkWinGame();
        }

    const reset = () => {
        props.reset();
        guessedLetters.forEach((item) => {
            if (item.classList.contains('right-guess')) {
                item.classList.remove('right-guess');
            } else if (item.classList.contains('wrong-guess')) {
                item.classList.remove('wrong-guess');
            }
        });
        setGuessedLetters([]);
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
}

const mapStateToProps = ({ pokemonData, currentGuess }) => ({
    pokemonData,
    currentGuess
});

export default connect(mapStateToProps, mapDispatchToProps)(Letters);