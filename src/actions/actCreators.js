export const SET_IMAGE = 'GET_POKEMON_IMAGE';
export const SET_NAME = 'GET_POKEMON_NAME';

export const setImage = (data) => ({
    type: SET_IMAGE,
    payload: data
});

export const setName = (data) => ({
    type: SET_NAME,
    payload: data
});

