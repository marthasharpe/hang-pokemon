import React from 'react';
import './PokemonName.css';
import { connect } from 'react-redux';
import { addWrongGuess, addRightGuess, reset } from '../../actions/actCreators'

const PokemonName = (props) => {
    
    let name = props.pokemonData.name;
    let nameArray = name.split('')
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

    for (let i=0; i<nameArray.length; i++) {
        if (nameArray[i] === props.currentGuess) {
            document.getElementById(`${nameArray[i]+i}`).classList.add('guessed-letter');
            props.addRightGuess();
        }
    }

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
    wrongGuesses,
})

const mapDispatchToProps = {
    addWrongGuess,
    addRightGuess,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonName);