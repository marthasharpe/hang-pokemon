import React from 'react';
import { connect } from 'react-redux';
import { setData, startGame } from '../../actions/actCreators';
import './Image.css';

const Image = (props) => {
        
    const fetchPokemon = () => {
        props.setData();
        props.startGame()
    };

    return(
        <div style={{marginTop: 50}}>
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
    setData,
    startGame,
}

export default connect(mapStateToProps, mapDispatchToProps)(Image);