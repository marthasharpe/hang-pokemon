import {
    SET_IMAGE,
    SET_NAME,
} from '../actions/actCreators';

const initialState = {
    image: 'http://pngimg.com/uploads/pokeball/pokeball_PNG34.png',
    name: 'pokemon',
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IMAGE:
            return {
                ...state,
                image: action.payload,
            }
        case SET_NAME:
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;