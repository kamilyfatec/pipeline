// jogo.js ou index.js
function checkGuess(guess, randomNumber) {
    if (guess === randomNumber) {
        return 'Parabéns! Adivinhaste o número.';
    } else if (guess > randomNumber) {
        return 'Muito alto! Tenta um número menor.';
    } else {
        return 'Muito baixo! Tenta um número maior.';
    }
}

module.exports = checkGuess;
