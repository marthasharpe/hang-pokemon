import {
    SET_POKEMON_DATA,
    SET_GUESS,
    ADD_WRONG_GUESS,
    RESET,
} from '../actions/actCreators';

const initialState = {
    pokemonData: {
        image: 'http://pngimg.com/uploads/pokeball/pokeball_PNG34.png',
        name: ''
    },
    currentGuess: '',
    wrongGuesses: 0,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMON_DATA:
            return {
                ...state,
                pokemonData: action.data
            }
        case SET_GUESS:
            return {
                ...state,
                currentGuess: action.currentGuess,
            }
        case ADD_WRONG_GUESS:
            return {
                ...state,
                wrongGuesses: state.wrongGuesses + 1,
            }
        case RESET:
            return initialState;
        default:
            return state;
    }
}

export default rootReducer;