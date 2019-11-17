import React, { useState } from 'react';
import './PokemonName.css';
import { connect } from 'react-redux';
import { addWrongGuess, reset } from '../../actions/actCreators'

const PokemonName = (props) => {
    // const [rightGuesses, setRightGuesses] = useState([]);
    
    let nameArray = props.pokemonData.name.split('')
    let nameData = [];
    for (let i=0; i<nameArray.length; i++) {
        nameData.push(
            {
                nameLetter: nameArray[i],
                id: nameArray[i]+i,
                key: nameArray[i]+i,
            }
        );
    }

    // props.name.forEach((letter) => {
    //     if (letter === props.currentGuess) {         
    //         props.addRightGuess();
    //         console.log(props.rightGuesses)
    //     }
    // })


    // and if the letter is equal to props.guess, then letter.classList.add('guessed-letter')

    return (
        <div className='name-container' id='pokemon-name'>
            {nameData.map((item) => (
                <div className="letter-container" key={item.key}>
                    <p className="name-letter" id={item.id}>
                        {item.nameLetter}
                    </p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = ({ pokemonData, currentGuess, wrongGuesses }) => ({
    pokemonData,
    currentGuess,
    wrongGuesses
})

const mapDispatchToProps = {
    addWrongGuess,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonName);