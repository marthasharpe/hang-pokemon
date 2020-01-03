import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../../actions/actCreators';
import Button from 'react-bootstrap/Button';

const Reset = (props) => {

    // when game ends, reset state
    const reset = () => {
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