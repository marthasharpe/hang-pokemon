import React, { useEffect } from 'react';
import './Letters.css';
import { connect } from 'react-redux';
//import {  } from '../actions/actCreators'

const Letters = () => {

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
    }, []);

    return(
        <div className='letters-container'>
            <p>a</p>
        </div>
    )
}

const mapDispatchToProps = {
    // switchSession,
    // switchBreak,
    // decSeconds
}

export default connect(null, mapDispatchToProps)(Letters);