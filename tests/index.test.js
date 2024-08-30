// index.test.js
const checkGuess = require('../src/index');

describe('Testando a função checkGuess', () => {
    test('Deve retornar "Parabéns! Adivinhaste o número." quando o palpite for igual ao número aleatório', () => {
        expect(checkGuess(50, 50)).toBe('Parabéns! Adivinhaste o número.');
    });

    test('Deve retornar "Muito alto! Tenta um número menor." quando o palpite for maior que o número aleatório', () => {
        expect(checkGuess(75, 50)).toBe('Muito alto! Tenta um número menor.');
    });

    test('Deve retornar "Muito baixo! Tenta um número maior." quando o palpite for menor que o número aleatório', () => {
        expect(checkGuess(25, 50)).toBe('Muito baixo! Tenta um número maior.');
    });
});
