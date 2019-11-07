export const GET_POKEMON = 'GET_POKEMON';
export const SET_IMAGE = 'SET_IMAGE';
export const SET_NAME = 'SET_NAME';

export const getPokemon = () => ({
    type: GET_POKEMON,
    payload: fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800)}/`)
      .then(response => response.json())
      .then(data => {
        console.log(data.sprites.front_default);
        console.log(data.species.name);
      })
});

export const setImage = (data) => ({
    type: SET_IMAGE,
});

export const setName = (name) => ({
    type: SET_NAME,
    name: name
});