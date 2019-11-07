import {
    GET_POKEMON
} from '../actions/actCreators';

const initialState = {
    image: 'http://pngimg.com/uploads/pokeball/pokeball_PNG34.png',
    name: 'pokemon',
    currentGuess: ''
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMON:
            return {
                ...state,
                image: action.payload,
                name: action.payload.data.species.name,
            }
        default:
            return state;
    }
}

export default rootReducer;