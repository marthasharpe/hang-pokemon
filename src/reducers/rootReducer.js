import {
    //ACTIONS
} from '../actions/actCreators';

const initialState = {
    url: 'http://pngimg.com/uploads/pokeball/pokeball_PNG34.png',
    name: 'pokemon'
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        //cases
        default:
            return state;
    }
}

export default rootReducer;