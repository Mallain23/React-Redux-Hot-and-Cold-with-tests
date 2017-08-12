import reducer from './reducer'
import { makeGuess, toggleInfoModal, newGame } from './actions'

describe('hot and cold reducer', () => {
    it('should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, '_unknown')
        expect(state.guesses).toEqual([])
        expect(state.feedback).toEqual('Make your guess!')
        expect(state.showInfoModal).toEqual(false)
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0)
        expect(state.correctAnswer).toBeLessThanOrEqual(100)
    });

    it('should return state if unknown action passed in', () => {
        let currentState = {}
        const state = reducer(currentState, 'unknown')
        expect(state).toBe(currentState)
    });

    it('should start a new game', () => {
        let state = {
            guesses: [1, 2, 3],
            feedback: 'Yay',
            correctAnswer: -1,
            showInfoModal: true

        }

        state = reducer(state, newGame())
        expect(state.guesses).toEqual([])
        expect(state.feedback).toEqual('Make your guess!')
        expect(state.showInfoModal).toEqual(false)
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0)
        expect(state.correctAnswer).toBeLessThanOrEqual(100)
    });

    it('should toggle info modal', () => {
      let state = {
        showInfoModal: true
      }

      state = reducer(state, toggleInfoModal())
      expect(state.toggleInfoModal).toEqual(false)
    })

    it('should return the correct feedback on guess', () => {

      let state = {
            guesses: [1, 2, 3],
            feedback: 'Yay',
            correctAnswer: 54,
            showInfoModal: true
          }

      state = reducer(state, makeGuess(56))
      expect(state.feedback).toEqual('You\'re Hot!')
      expect(state.guesses).toEquak([1, 2, 3, 56])

      state = reducer(state, makeGuess(10))
      expect(state.feedback).toEqual('You\'re Cold...')
      expect(state.guesses).toEqual([1, 2, 3, 56, 10])

      state = reducer(state, makeGuess(1))
      expect(state.feedback).toEqual('You\'re Ice Cold...')
      expect(state.guesses).toEqual([1, 2, 3, 56, 10])

      state = reducer(state, makeGuess(43))
      expect(state.feedback).toEqual('You\'re Warm')
      expect(state.guesses).toEqual([1, 2, 3, 56, 10, 43])   

      state = reducer(state, makeGuess(54))
      expect(state.feedback).toEqual('You got it!')
      expect(state.guesses).toEqual([1, 2, 3, 56, 10, 43, 54])

    })
});
