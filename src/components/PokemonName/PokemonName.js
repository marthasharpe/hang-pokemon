import React from 'react';
import './PokemonName.css';
import { connect } from 'react-redux';

const PokemonName = (props) => {
    let nameLetters = props.pokemonData.nameLetters;
    // let nameLetters = name.split('')
    let nameData = [];
    for (let i=0; i<nameLetters.length; i++) {
        nameData.push(
            {
                nameLetter: nameLetters[i],
                id: nameLetters[i]+i,
                key: nameLetters[i]+i,
            }
        );
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

const mapStateToProps = ({ pokemonData }) => ({
    pokemonData,
})

export default connect(mapStateToProps, null)(PokemonName);