export const SET_IMAGE = 'GET_POKEMON_IMAGE';
export const SET_NAME = 'GET_POKEMON_NAME';
export const SET_GUESS = 'SET_GUESS';
export const RESET = 'RESET';

export const setImage = (image) => {
    return {
        type: SET_IMAGE,
        image
    }
};

export const setName = (name) => {
    return {
        type: SET_NAME,
        name
    }
};

export const setGuess = (guess) => {
    return {
        type: SET_GUESS,
        guess
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}

