import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import { findByTestAttr, checkProps, storeFactory } from '../../../test/testUtil'

import Input from './Input'

const setup = (initialState={}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<Input store={store} />).dive().dive()
	return wrapper;
}
describe('render', () => {
	describe('word has not been guessed', () => {
		test('render without error', () => {
			
		})
		test('render input box', () => {
			
		})
		test('render submit button', () => {
			
		})
	})

	describe('word has been guessed', () => {
		test('render without error', () => {
			
		})
		test('does not render input box', () => {
			
		})
		test('does not render submit button', () => {
			
		})
	})
})
describe('update state', () => {
	
})