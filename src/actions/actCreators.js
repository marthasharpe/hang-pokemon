export const SET_POKEMON_DATA = 'SET_POKEMON_DATA'
export const SET_GUESS = 'SET_GUESS';
export const ADD_WRONG_GUESS = 'ADD_WRONG_GUESS';
export const ADD_RIGHT_GUESS = 'ADD_RIGHT_GUESS';
export const END_GAME = 'END_GAME';
export const START_GAME = 'START_GAME';
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

export const addWrongGuess = (guess) => {
    return {
        type: ADD_WRONG_GUESS,
        guess
    }
}

export const addRightGuess = (guess) => {
    return {
        type: ADD_RIGHT_GUESS,
        guess
    }
}

export const startGame = () => {
    return {
        type: START_GAME,
    }
}

export const endGame = () => {
    return {
        type: END_GAME,
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}

