import {
    SET_IMAGE,
    SET_NAME,
    SET_GUESS,
} from '../actions/actCreators';

const initialState = {
    image: 'http://pngimg.com/uploads/pokeball/pokeball_PNG34.png',
    name: 'pokémon',
    guess: '',
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IMAGE:
            return {
                ...state,
                image: action.image,
            }
        case SET_NAME:
            return {
                ...state,
                name: action.name,
            }
        case SET_GUESS:
            return {
                ...state,
                guess: action.guess,
            }
        default:
            return state;
    }
}

export default rootReducer;