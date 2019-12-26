import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import GuessedWords from './GuessedWords'
import { findByTestAttr, checkProps } from '../../../test/testUtil'

const defaultProps = {
	guessedWords: [{ guessedWord: 'train', letterMatchCount: 3}]
}
const setup = (props = {}, state = null) => {
	const setupProps = {...defaultProps, ...props}

	const wrapper = shallow(<GuessedWords {...setupProps} />)
	if(state) wrapper.setState(state);
	return wrapper;
}

test('does not throw warning expected props', () => {
	checkProps(GuessedWords, defaultProps);
})

describe('if there is no words guessed', () => {
	let wrapper
	beforeEach(() => {
		wrapper = setup({ guessedWords: []})
	})
	test('render without error', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words');
		expect(component.length).toBe(1);
	})

	test('render instructions to guess a word', () => {
		const component = findByTestAttr(wrapper, 'guess-instructions');
		expect(component.text().length).not.toBe(0);
	})
})
describe('if there is words guessed', () => {
	const guessedWords = [
		{ guessedWord: 'train', letterMatchCount: 3},
		{ guessedWord: 'agile', letterMatchCount: 1},
		{ guessedWord: 'party', letterMatchCount: 5}
	]
	let wrapper;

	beforeEach(() => {
		wrapper = setup({ guessedWords })
	})

	test('renders without error', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words');
		expect(component.length).toBe(1);
	})
	test('renders "guessed words" section', () => {
		const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
		expect(guessedWordsNode.length).toBe(1);
	})
	test('correct number of guessed words', () => {
		const guessedWordNode = findByTestAttr(wrapper, 'guessed-word');
		expect(guessedWordNode.length).toBe(guessedWords.length)
	})

	test('correct count number of guesses', () => {
		const guessedWordCountComponent = findByTestAttr(wrapper, 'guessed-count');
		expect(guessedWordCountComponent.text()).toBe(guessedWords.length.toString());

	})
})