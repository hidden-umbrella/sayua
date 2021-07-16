import * as sayua from '../../src/index'

describe('Images - Dog', () => {
	test('Should return a string / url', async () => {
		expect(typeof await sayua.img.dog()).toBe('string')
	})
})
