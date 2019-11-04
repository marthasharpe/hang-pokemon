import React, { useEffect } from 'react';
import './PokemonName.css';
import { connect } from 'react-redux';
//import {  } from '../actions/actCreators'

const PokemonName = ({ name }) => {

    useEffect(() => {       
        // let countdown = null;
        // if (timerRunning && secondsLeft > 0) {
        //     countdown = setInterval(() => {
        //         decSeconds();
        //     }, 1000);
        // } else if (timerRunning && secondsLeft === 0) {
        //     countdown = setInterval(() => {
        //         decSeconds();
        //     }, 1000);
        //     audio.play();
        //     if (interval === 'Session') {
        //         switchBreak();
        //     } else if (interval === 'Break') {
        //         switchSession();
        //     }
        // } else {
        //     clearInterval(countdown);
        // }
        // return () => clearInterval(countdown);
    }, [name]);

    return(
        <div className='name-container'>
            <p>{name}</p>
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