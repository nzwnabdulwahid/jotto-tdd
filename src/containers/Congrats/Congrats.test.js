import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import Congrats from './Congrats'
import { findByTestAttr, checkProps } from '../../../test/testUtil'

const defaultProps = { success: false }

const setup = (props = {}, state = null) => {
	const setupProps = {...defaultProps, ...props}

	const wrapper = shallow(<Congrats {...setupProps} />)
	if(state) wrapper.setState(state);
	return wrapper;
}

test('renders without error', () => {
	const wrapper = setup({success: false});
	const congratsComponent = findByTestAttr(wrapper, 'component-congrats')
	expect(congratsComponent.length).toBe(1);
})
test('renders `no text` when `success` props is `false`', () => {
	const wrapper = setup({success: false});
	const congratsComponent = findByTestAttr(wrapper, 'component-congrats')
	expect(congratsComponent.text()).toBe("");
})
test('renders non empty congrats message when success props is true', () => {
	const wrapper = setup({success: true});
	const message = findByTestAttr(wrapper, 'congrats-message')
	expect(message.text().length).not.toBe(0);
})
test('does not throw warning with expected props', () => {
	const expectedProps = { success: false }
	checkProps(Congrats, expectedProps);
})