import React from 'react';
import { connect } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';

const barStyle = {
    width: "90%",
    maxWidth: 600,
    marginBottom: "1rem",
}

const Progress = (props) => {

    const wrongCount = props.wrongGuesses.length;
    const now = wrongCount * 10;

    return (
        <div style={barStyle}>
            {props.gameStarted ? (
                <ProgressBar
                    striped
                    variant={wrongCount < 8 ? "warning" : "danger"}
                    now={now}
                    label={`${10 - wrongCount} left`}
                    key={1}
                />
            ) : <div style={{height: "1rem"}}></div>}
        </div>
    )
}

const mapStateToProps = ({ wrongGuesses, gameStarted }) => ({
    wrongGuesses,
    gameStarted
})

export default connect(mapStateToProps, null)(Progress);