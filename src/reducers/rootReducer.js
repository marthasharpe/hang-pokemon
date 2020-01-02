import {
    SET_IMAGE,
    SET_GUESS,
    ADD_WRONG_GUESS,
    ADD_RIGHT_GUESS,
    END_GAME,
    START_GAME,
    ADD_WIN,
    ADD_LOSS,
    RESET,
    SET_DATA
} from '../actions/actCreators';
import pokeball from '../pokeball.png';

const initialState = {
    name: '',
    image: pokeball,
    currentGuess: '',
    wrongGuesses: [],
    rightGuesses: [],
    gameOver: false,
    gameStarted: false,
    won: 0,
    lost: 0,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DATA:
            return {
                ...state,
                name: action.data.species.name,
                image: action.data.sprites.front_default,
            }
        case SET_IMAGE:
            return {
                ...state,
                image: action.image,
            }
        case SET_GUESS:
            return {
                ...state,
                currentGuess: action.currentGuess,
            }
        case ADD_WRONG_GUESS:
            return {
                ...state,
                wrongGuesses: [...state.wrongGuesses, action.guess],
            }
        case ADD_RIGHT_GUESS:
            return {
                ...state,
                rightGuesses: [...state.rightGuesses, action.guess] ,
            }
        case START_GAME:
            return {
                ...state,
                gameOver: false,
                gameStarted: true,
            }
        case END_GAME:
            return {
                ...state,
                gameOver: true,
            }
        case ADD_WIN:
            return {
                ...state,
                won: state.won + 1
            }
        case ADD_LOSS:
            return {
                ...state,
                lost: state.lost + 1
            }
        case RESET:
            return {
                ...state,
                name: '',
                image: pokeball,
                currentGuess: '',
                wrongGuesses: [],
                rightGuesses: [],
                gameOver: false,
                gameStarted: false,
            };
        default:
            return state;
    }
}

export default rootReducer;