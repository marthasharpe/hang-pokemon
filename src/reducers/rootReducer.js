import {
    SET_IMAGE,
    SET_NAME,
    SET_GUESS,
    RESET,
} from '../actions/actCreators';

const initialState = {
    image: 'http://pngimg.com/uploads/pokeball/pokeball_PNG34.png',
    name: '',
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
        case RESET:
            return initialState;
        default:
            return state;
    }
}

export default rootReducer;