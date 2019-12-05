import React from 'react';
import './Score.css';
import { connect } from 'react-redux';

const Score = (props) => {

    return (
        <div className='score-container'>
            <h3>Won: {props.won}</h3>
            <h3>Lost: {props.lost}</h3>
        </div>
    )
}

const mapStateToProps = ({ won, lost }) => ({
    won,
    lost
})

export default connect(mapStateToProps, null)(Score);