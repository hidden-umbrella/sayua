import * as sayua from '../../src/index'

describe('Images - Birb', () => {
	test('Should return a string / url', async () => {
		expect(typeof await sayua.img.birb()).toBe('string')
	})
})
