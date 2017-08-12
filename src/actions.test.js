import { NEW_GAME, MAKE_GUESS, TOGGLE_INFO_MODAL, newGame, makeGuess, toggleInfoModal } from './actions'

describe('new game', () => {
    it('should return the action', () => {
        const correctAnswer = 45
        const action = newGame();
        expect(action.type).toEqual(NEW_GAME)
        expect(action.correctAnswer).toEqual(correctAnswer)
    });
});

describe('make guess', () => {
    it('should return the action', () => {
        const guess = 34
        const action = makeGuess(guess)
        expect(action.type).toEqual(MAKE_GUESS)
        expect(action.guess).toEqual(guess)
    });
});

describe('toggle info modal', () => {
    it('should return the action', () => {
        const action = toggleInfoModal()
        expect(action.type).toEqual(TOGGLE_INFO_MODAL)
    });
});
