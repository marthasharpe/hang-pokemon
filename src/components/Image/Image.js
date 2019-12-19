import React from 'react';
import { connect } from 'react-redux';
import { setData, startGame } from '../../actions/actCreators'
import './Image.css';

const Image = (props) => {
        
    const fetchPokemon = () => {
        props.setData();
        props.startGame()
    };

    return(
        <div className='image-container'>
            <img
                className="image"
                alt="Pokemon"
                onClick={
                    props.gameStarted === false && props.gameOver === false ? fetchPokemon : null
                }
                style={
                    props.gameStarted === false && props.gameOver === false ? {cursor: 'pointer'} : {cursor: 'default'}
                }
                src={props.image}
            />
        </div>
    )
}

const mapStateToProps = ({ image, gameOver, gameStarted }) => ({
    gameOver,
    gameStarted,
    image
})

const mapDispatchToProps = {
    // setName,
    // setImage,
    setData,
    startGame,
}

export default connect(mapStateToProps, mapDispatchToProps)(Image);