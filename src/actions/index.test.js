import moxios from 'moxios';

import { storeFactory } from '../../test/testUtil'
import { getSecretWord } from './'

describe('getSecretWord action creator', () => {
	beforeEach(() => {
		moxios.install();
	})
	afterEach(() => {
		moxios.uninstall();
	})
	test('add response word to state', () => {
		const secretWord = "party";
		const store = storeFactory();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: secretWord
			})
		})

		return store.dispatch(getSecretWord())
		.then(() => {
			const newState = store.getState();
			expect(newState.secretWord).toEqual(secretWord);
		})
	})
})