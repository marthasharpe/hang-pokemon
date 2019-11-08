import {
    SET_IMAGE,
    SET_NAME,
} from '../actions/actCreators';

const initialState = {
    image: 'http://pngimg.com/uploads/pokeball/pokeball_PNG34.png',
    name: 'pokémon',
    wrongCount: 0,
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
        default:
            return state;
    }
}

export default rootReducer;