import React from 'react';
import './Letters.css';
import { connect } from 'react-redux';
//import {  } from '../actions/actCreators'

const Letters = () => {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = alphabet.split('');
    const letterData = letters.map(item => (
        {
            letter: item,
            id: item,
            key: item
        }
    ));
    
    return(
        <div className='letters-container'>
            {letterData.map((item) => (
                <button className="letter-button" id={item.id} key={item.key}>{item.letter}</button>
            ))}
        </div>
    )
}

const mapDispatchToProps = {
    // switchSession,
}

export default connect(null, mapDispatchToProps)(Letters);