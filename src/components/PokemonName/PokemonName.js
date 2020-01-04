import React from 'react';
import './PokemonName.css';
import { connect } from 'react-redux';

const PokemonName = (props) => {

    // // reveal correctly-guessed letters
    // const updateLetters = () => {
    //     let updatedName = props.nameLetters.map(letter => {
    //         if (letter.id.match(/[^a-z]/g) || letter.id === props.currentGuess) {
    //             return {
    //                 ...letter,
    //                 classList: [...classList, 'guessed-letter']
    //             }
    //         }
    //         return letter;
    //     })
    //     props.updateName(updatedName);
    // }
    
    // const showLetters = () => {
    //     return props.nameLetters.map((letter, index) => (
    //         <div className="letter-container" key={letter.id+index}>
    //             <p
    //                 className={letter.classList.join(' ')}
    //                 id={letter.id+index}
    //                 >
    //                 {letter.id}
    //             </p>
    //         </div>
    //     ))
    // }

    return (
        <div className='name-container' id='pokemon-name'>
            {props.gameStarted ? props.nameLetters.map((letter, index) => (
            <div className="letter-container" key={`${letter.id}-${index}`}>
                <p
                    className={letter.classList.join(' ')}
                    id={`${letter.id}-${index}`}
                    >
                    {letter.id}
                </p>
            </div>
        )) : <p>Click to Start</p>}
        </div>
    )
}

const mapStateToProps = ({ nameLetters, currentGuess, gameStarted }) => ({
    nameLetters,
    currentGuess,
    gameStarted
})

export default connect(mapStateToProps, null)(PokemonName);