import React from 'react';
import './Letters.css';
import { connect } from 'react-redux';
//import {  } from '../actions/actCreators'

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const letters = alphabet.split('');
const letterData = letters.map(item => (
    {
        letter: item,
        id: item,
        key: item
    }
));

const Letters = () => {
    
    return(
        <div className='letters-container'>
            {letterData.map((item) => (
                <button id={item.id} key={item.key}>{item.letter}</button>
            ))}
        </div>
    )
}

const mapDispatchToProps = {
    // switchSession,
    // switchBreak,
    // decSeconds
}

export default connect(null, mapDispatchToProps)(Letters);