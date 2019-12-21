import { getLetterMatchCount } from './';

describe('getLetterMatchCount', () => {
	const secretWord = 'party';
	test('return correct count where there are no matching letter', () => {
		const letterMatchCount = getLetterMatchCount('bones', secretWord);
		expect(letterMatchCount).toBe(0)
	});
	test('return correct count where there are 3 matching letter', () => {
		const letterMatchCount = getLetterMatchCount('train', secretWord);
		expect(letterMatchCount).toBe(3)
	})
	test('return correct count where there are duplicate letter in the guess', () => {
		const letterMatchCount = getLetterMatchCount('parka', secretWord);
		expect(letterMatchCount).toBe(3)
	})
})