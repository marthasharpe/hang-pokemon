import React from 'react';
import './PokemonButton.css';
import { connect } from 'react-redux';
import { reset } from '../../actions/actCreators'

const PokemonButton = (props) => {

    // when game ends, reset letters and state
    const reset = () => {
        props.wrongGuesses.forEach(item => document.getElementById(item).classList.remove('wrong-guess'))
        props.rightGuesses.forEach(item => document.getElementById(item).classList.remove('right-guess'))
        props.reset();
    }

    return(
        <div className='button-container'>
            <h2 className="text">
                Hello
            </h2>
            <button className="reset-button" onClick={reset}>Reset</button>
        </div>
    )
}

const mapStateToProps = ({ rightGuesses, wrongGuesses }) => ({
    rightGuesses,
    wrongGuesses,
})

const mapDispatchToProps = {
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonButton);