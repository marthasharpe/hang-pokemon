import React, { useState } from 'react';
import './PokemonName.css';
import { connect } from 'react-redux';
import { addWrongGuess, reset } from '../../actions/actCreators'

const PokemonName = (props) => {
    // const [rightGuesses, setRightGuesses] = useState([]);
    
    let nameData = [];
    for (let i=0; i<props.name.length; i++) {
        nameData.push(
            {
                nameLetter: props.name[i],
                id: props.name[i]+i,
                key: props.name[i]+i,
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

const mapStateToProps = ({ name, currentGuess, wrongGuesses }) => ({
    name,
    currentGuess,
    wrongGuesses
})

const mapDispatchToProps = {
    addWrongGuess,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonName);