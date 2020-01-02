import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../../actions/actCreators';
import Button from 'react-bootstrap/Button';

const Reset = (props) => {

    // when game ends, reset letters and state
    const reset = () => {
        props.wrongGuesses.forEach(item => document.getElementById(item).classList.remove('wrong-guess'))
        props.rightGuesses.forEach(item => document.getElementById(item).classList.remove('right-guess'))
        props.reset();
    }

    return (
        <React.Fragment>
            <Button
                variant="dark"
                onClick={reset}
            >
                Reset
            </Button>
        </React.Fragment>
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