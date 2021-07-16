import * as sayua from '../../src/index'

describe('Images - Wink', () => {
	test('Should return a string / url', async () => {
		expect(typeof await sayua.img.wink()).toBe('string')
	})
})
