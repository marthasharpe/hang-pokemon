import React from 'react';
import './PokemonName.css';
import { connect } from 'react-redux';

const PokemonName = (props) => {

    const nameLetters = props.name.split('');
    const nameData = [];
    for (let i=0; i<nameLetters.length; i++) {
        nameData.push(
            {
                nameLetter: nameLetters[i],
                id: nameLetters[i]+i,
                key: nameLetters[i]+i,
            }
        );
    }

    return(
        <div className='name-container'>
            {nameData.map((item) => (
                <div
                    className="letter-container"
                    key={item.key}
                    >
                    <p
                        className="name-letter"
                        id={item.id}
                        >
                        {item.nameLetter}
                    </p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = ({ name }) => ({
    name
})

export default connect(mapStateToProps, null)(PokemonName);