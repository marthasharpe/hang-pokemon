export const SET_IMAGE = 'SET_IMAGE';
export const SET_NAME = 'SET_NAME';

export const setImage = (data) => ({
    type: SET_IMAGE,
});

export const setName = (name) => ({
    type: SET_NAME,
    name: name
});