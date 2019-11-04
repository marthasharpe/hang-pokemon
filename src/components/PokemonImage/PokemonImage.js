import React, { useEffect } from 'react';
import './PokemonImage.css';
import { connect } from 'react-redux';
//import {  } from '../actions/actCreators'

const PokemonImage = ({ url }) => {

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
    }, [url]);

    return(
        <div className='image-container'>
            <img className="url-image" alt="Pokemon" src={url}/>
        </div>
    )
}

const mapStateToProps = ({ url }) => ({
    url
})

// const mapDispatchToProps = {
//     switchSession,
//     switchBreak,
//     decSeconds
// }

export default connect(mapStateToProps, null)(PokemonImage);