import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import { findByTestAttr, checkProps, storeFactory } from '../../../test/testUtil'

import Input from './Input'

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
}

describe('render', () => {
	describe('word has not been guessed', () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { success: false };
			wrapper=setup(initialState);
		})
		test('render without error', () => {
			const component = findByTestAttr(wrapper, 'component-input');
			expect(component.length).toBe(1);
		})
		test('render input box', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box');
			expect(inputBox.length).toBe(1);
		})
		test('render submit button', () => {
			const submitBtn = findByTestAttr(wrapper, 'submit-button');
			expect(submitBtn.length).toBe(1);
		})
	})

	
	describe('word has been guessed', () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { success: true };
			wrapper = setup(initialState);
		})
		test('render without error', () => {
			const component = findByTestAttr(wrapper, 'component-input');
			expect(component.length).toBe(1);
		})
		test('does not render input box', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box');
			expect(inputBox.length).toBe(0);
		})
		test('does not render submit button', () => {
			const submitBtn = findByTestAttr(wrapper, 'submit-button');
			expect(submitBtn.length).toBe(0);
		})
	})
})
describe('redux props', () => {
	test('has success piece of state as props', () => {
		const success = true;
		const wrapper = setup({success});
		const successProps = wrapper.instance().props.success;
		expect(successProps).toBe(success);
	})
	test('`guessWord action creator is a function props`', () => {
		const wrapper = setup();
		const guessWordProps = wrapper.instance().props.guessWord;
		expect(guessWordProps).toBeInstanceOf(Function);
	})
})








