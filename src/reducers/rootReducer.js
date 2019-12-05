import {
    SET_NAME,
    SET_IMAGE,
    SET_GUESS,
    ADD_WRONG_GUESS,
    ADD_RIGHT_GUESS,
    END_GAME,
    START_GAME,
    ADD_WIN,
    ADD_LOSS,
    RESET,
} from '../actions/actCreators';

const initialState = {
    name: '',
    image: 'http://pngimg.com/uploads/pokeball/pokeball_PNG34.png',
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
        case SET_NAME:
            return {
                ...state,
                name: action.name,
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
                image: 'http://pngimg.com/uploads/pokeball/pokeball_PNG34.png',
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