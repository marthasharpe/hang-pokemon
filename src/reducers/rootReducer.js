import {
    SET_POKEMON_DATA,
    SET_GUESS,
    ADD_WRONG_GUESS,
    ADD_RIGHT_GUESS,
    RESET,
} from '../actions/actCreators';

const initialState = {
    pokemonData: {
        image: '',
        nameLetters: [],
    },
    currentGuess: '',
    wrongGuesses: [],
    rightGuesses: [],
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
                wrongGuesses: [...state.wrongGuesses, action.guess],
            }
        case ADD_RIGHT_GUESS:
            return {
                ...state,
                rightGuesses: [...state.rightGuesses, action.guess] ,
            }
        case RESET:
            return initialState;
        default:
            return state;
    }
}

export default rootReducer;