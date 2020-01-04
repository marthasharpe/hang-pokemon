export const SET_IMAGE = 'SET_IMAGE';
export const SET_GUESS = 'SET_GUESS';
export const ADD_WRONG_GUESS = 'ADD_WRONG_GUESS';
export const ADD_RIGHT_GUESS = 'ADD_RIGHT_GUESS';
export const END_GAME = 'END_GAME';
export const START_GAME = 'START_GAME';
export const ADD_WIN = 'ADD_WIN';
export const ADD_LOSS = 'ADD_LOSS';
export const RESET = 'RESET';
export const SET_DATA = 'SET_DATA';
export const CHANGE_LETTERS = 'CHANGE_LETTERS';

export const setData = () => {
    return (dispatch) => {
        let number = Math.floor(Math.random() * 800);
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
            .then(res => res.json())
            .then(data => {
                console.log(data.species.name);
                dispatch({ type: SET_DATA, data })
            })
    }
}

export const setImage = (image) => {
    return {
        type: SET_IMAGE,
        image
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

export const addWin = () => {
    return {
        type: ADD_WIN,
    }
}

export const addLoss = () => {
    return {
        type: ADD_LOSS,
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}

export const changeLetters = (newLetters) => {
    return {
        type: CHANGE_LETTERS,
        newLetters,
    }
}

