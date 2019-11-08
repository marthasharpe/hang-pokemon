import React, { useState } from 'react';
import './Letters.css';
import { connect } from 'react-redux';
import { setGuess, reset } from '../../actions/actCreators'

const Letters = (props) => {
    const [guessedLetters, setGuessedLetters] = useState([]);
    
    //if letter === name.classList.add('guessed-letter')
    const handleClick = (e) => {
        let letter = document.getElementById(e.target.id);
        if (props.name.includes(e.target.id)) {
            letter.classList.add('right-guess');
        } else {
            letter.classList.add('wrong-guess');
        }
        setGuessedLetters([...guessedLetters, letter]);
        console.log(guessedLetters);
        props.setGuess(e.target.id);
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
                    onClick={handleClick}
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
    reset,
}

const mapStateToProps = ({ name, guess }) => ({
    name,
    guess
});

export default connect(mapStateToProps, mapDispatchToProps)(Letters);