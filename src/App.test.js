import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { render } from '@testing-library/react';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props = {}, state = null) => {
	const wrapper = shallow(<App {...props} />)
	if(state) wrapper.setState(state);
	return wrapper;
}

const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test='${val}']`);
}

test('render without error', () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper,'component-app');
	expect(appComponent.length).toBe(1);
})
// test('render increments button', () => {
// 	const wrapper = setup();
// 	const button = findByTestAttr(wrapper,'increment-button');
// 	expect(button.length).toBe(1);
// })
// test('render decrement button', () => {
// 	const wrapper = setup();
// 	const button = findByTestAttr(wrapper, 'decrement-button');
// 	expect(button.length).toBe(1);
// })
// test('render counter display', () => {
// 	const wrapper = setup();
// 	const counterDisplay = findByTestAttr(wrapper,'counter-display');
// 	expect(counterDisplay.length).toBe(1);
// })
// test('counter start at 0', () => {
// 	const wrapper = setup();
// 	const initialWrapperState = wrapper.state("counter");
// 	expect(initialWrapperState).toBe(0);
// })
// test('clicking increment button increment counter display', () => {
// 	const counter = 7;
// 	const wrapper = setup(null, { counter })
// 	const button = findByTestAttr(wrapper, 'increment-button');
// 	button.simulate('click');
// 	const counterDisplay = findByTestAttr(wrapper,'counter-display');
// 	expect(counterDisplay.text()).toContain(counter + 1)
// })
// test('clicking decrement button decrease counter display', () => {
// 	const counter = 7;
// 	const wrapper = setup(null, { counter });
// 	const button = findByTestAttr(wrapper, 'decrement-button');
// 	button.simulate('click');
// 	const counterDisplay = findByTestAttr(wrapper, 'counter-display');
// 	expect(counterDisplay.text()).toContain(counter - 1);
// })
// test('no error message if state not less than 0', () => {
// 	const counter = 7
// 	const wrapper = setup(null, { counter });
// 	const button = findByTestAttr(wrapper, 'decrement-button');
// 	button.simulate('click');
// 	const warningText = findByTestAttr(wrapper, 'minimum-exceed-error-text');
// 	expect(warningText.length).toBe(0);
// })
// test('throw error message cannot go exceed more than 0', () => {
// 	const counter = 0;
// 	const wrapper = setup(null, { counter });
// 	const button = findByTestAttr(wrapper, 'decrement-button');
// 	button.simulate('click');
// 	const warningText = findByTestAttr(wrapper, 'minimum-exceed-error-text');
// 	expect(warningText.length).toBe(1);
// })





