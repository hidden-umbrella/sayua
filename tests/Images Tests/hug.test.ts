import * as sayua from '../../src/index'

describe('Images - Hug', () => {
	test('Should return a string / url', async () => {
		expect(typeof await sayua.img.hug()).toBe('string')
	})
})
