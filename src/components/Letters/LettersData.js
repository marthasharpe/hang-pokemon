const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const letters = alphabet.split('');

export const lettersData = letters.map(item => (
    {
        letter: item,
        id: item,
        key: item
    }
));