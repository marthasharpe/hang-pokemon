import {
    SET_IMAGE,
    ADD_WRONG_GUESS,
    ADD_RIGHT_GUESS,
    END_GAME,
    START_GAME,
    ADD_WIN,
    ADD_LOSS,
    RESET,
    SET_DATA,
    UPDATE_LETTERS,
    UPDATE_NAME,
} from '../actions/actCreators';
import pokeball from '../pokeball.png';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const letters = alphabet.split('');

const initialState = {
    name: '',
    nameLetters: [],
    image: pokeball,
    currentGuess: '',
    wrongGuesses: [],
    rightGuesses: [],
    gameOver: false,
    gameStarted: false,
    won: 0,
    lost: 0,
    letters: letters.map(letter => (
        {
            name: letter,
            style: "outline-dark",
        }
    ))
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DATA:
            return {
                ...state,
                name: action.data.species.name,
                nameLetters: action.data.species.name.split('').map(letter => /[^a-z]/.test(letter) ? (
                    {
                        id: letter,
                        classList: ["name-letter", "visible"],
                    }
                ) : (
                    {
                        id: letter,
                        classList: ["name-letter"],
                    }
                )),
                image: action.data.sprites.front_default,
            }
        case SET_IMAGE:
            return {
                ...state,
                image: action.image,
            }
        case ADD_WRONG_GUESS:
            return {
                ...state,
                wrongGuesses: [...state.wrongGuesses, action.guess],
            }
        case ADD_RIGHT_GUESS:
            return {
                ...state,
                rightGuesses: [...state.rightGuesses, action.guess] ,
            }
        case START_GAME:
            return {
                ...state,
                gameOver: false,
                gameStarted: true,
            }
        case END_GAME:
            return {
                ...state,
                gameOver: true,
            }
        case ADD_WIN:
            return {
                ...state,
                won: state.won + 1
            }
        case ADD_LOSS:
            return {
                ...state,
                lost: state.lost + 1
            }
        case UPDATE_LETTERS:
            return {
                ...state,
                letters: action.updatedLetters,
            }
        case UPDATE_NAME:
            return {
                ...state,
                nameLetters: action.updatedName,
            }
        case RESET:
            return {
                ...state,
                name: '',
                nameLetters: [],
                image: pokeball,
                currentGuess: '',
                wrongGuesses: [],
                rightGuesses: [],
                gameOver: false,
                gameStarted: false,
                letters: letters.map(letter => (
                    {
                        name: letter,
                        style: "outline-dark",
                    }
                )),
            };
        default:
            return state;
    }
}

export default rootReducer;