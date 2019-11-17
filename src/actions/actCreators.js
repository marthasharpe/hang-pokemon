export const SET_POKEMON_DATA = 'SET_POKEMON_DATA'
export const SET_GUESS = 'SET_GUESS';
export const ADD_WRONG_GUESS = 'ADD_WRONG_GUESS';
export const ADD_RIGHT_GUESS = 'ADD_RIGHT_GUESS';
export const RESET = 'RESET';

export const setPokemonData = (data) => {
    return {
        type: SET_POKEMON_DATA,
        data
    }
}

export const setGuess = (currentGuess) => {
    return {
        type: SET_GUESS,
        currentGuess
    }
}

export const addWrongGuess = () => {
    return {
        type: ADD_WRONG_GUESS,
    }
}

export const addRightGuess = () => {
    return {
        type: ADD_RIGHT_GUESS,
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}

