import { actionTypes } from '../actions';
import { successReducer } from './successReducer';

test('return default initial state of false when no action is passed', () => {
	const newState = successReducer(undefined, {});
	expect(newState).toBe(false);
})

test('return state of true when receiving action of type `CORRECT_GUESS`', () => {
	const newState = successReducer(undefined, { type: "CORRECT_GUESS"});
	expect(newState).toBe(true);
})