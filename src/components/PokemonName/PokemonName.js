import React from 'react';
import './PokemonName.css';
import { connect } from 'react-redux';
//import {  } from '../actions/actCreators'

const PokemonName = ({ name }) => {
    const nameLetters = name.split('');
    let nameData = [];
    for (let i=0; i<nameLetters.length; i++) {
        nameData.push(
            {
                nameLetter: nameLetters[i],
                id: nameLetters[i]+i,
                key: nameLetters[i]+i
            }
        );
    }

    return(
        <div className='name-container'>
            {nameData.map((item) => (
                <div className = "letter-container">
                    <p className="name-letter" id={item.id} key={item.key}>{item.nameLetter}</p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = ({ name }) => ({
    name
})

// const mapDispatchToProps = {
//     switchSession,
//     switchBreak,
//     decSeconds
// }

export default connect(mapStateToProps, null)(PokemonName);