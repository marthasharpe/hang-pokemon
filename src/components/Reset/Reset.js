import React from 'react';
import './Reset.css';
import { connect } from 'react-redux';
import { reset } from '../../actions/actCreators'

const Reset = (props) => {

    // when game ends, reset letters and state
    const reset = () => {
        props.wrongGuesses.forEach(item => document.getElementById(item).classList.remove('wrong-guess'))
        props.rightGuesses.forEach(item => document.getElementById(item).classList.remove('right-guess'))
        props.reset();
    }

    return (
        <div className='button-container'>
            <button className="reset-button" onClick={reset}>Return</button>
        </div>
    )
}

const mapStateToProps = ({ wrongGuesses, rightGuesses }) => ({
    wrongGuesses,
    rightGuesses
})

const mapDispatchToProps = {
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);