import { storeFactory } from '../test/testUtil';
import { guessWord } from './actions'

describe('guessWord action dispatcher', () => {
	const secretWord = "party";
	const unsuccessfulGuess = "train"
	describe('no guess word', () => {
		let store;
		const initialState = { secretWord }
		beforeEach(() => {
			store = storeFactory(initialState);
		})
		test('update state correctly on unsuccessful guess', () => {
			store.dispatch(guessWord(unsuccessfulGuess));
			const expectedState = {
				...initialState,
				success:false,
				guessedWords: [{
					guessedWord: unsuccessfulGuess,
					letterMatchCount: 3
				}]
			}

			const newState = store.getState();
			expect(newState).toEqual(expectedState);
		})
		test('update state correctly on successful guess', () => {
			store.dispatch(guessWord(secretWord));
			const expectedState = {
				...initialState,
				success: true,
				guessedWords: [{
					guessedWord: secretWord,
					letterMatchCount: 5
				}]
			}

			const newState = store.getState();
			expect(newState).toEqual(expectedState);
		})
	})

	describe('some guess word', () => {
		const guessedWords = [{guessWord: 'agile', letterMatchCount: 1}];
		const initialState = { guessedWords, secretWord };
		let store;
		beforeEach(() => {
			store = storeFactory(initialState);
		})
		test('update state correctly on unsuccessful guess', () => {
			store.dispatch(guessWord(unsuccessfulGuess));
			const expectedState = {
				...initialState,
				success:false,
				guessedWords: [...guessedWords, {
					guessedWord: unsuccessfulGuess,
					letterMatchCount: 3
				}]
			}

			const newState = store.getState();
			expect(newState).toEqual(expectedState);
		})
		test('update state correctly on successful guess', () => {
			store.dispatch(guessWord(secretWord));
			const expectedState = {
				...initialState,
				success: true,
				guessedWords: [...guessedWords, {
					guessedWord: secretWord,
					letterMatchCount: 5
				}]
			}

			const newState = store.getState();
			expect(newState).toEqual(expectedState);
		})
	})
})