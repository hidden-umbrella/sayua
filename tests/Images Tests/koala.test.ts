import * as sayua from '../../src/index'

describe('Images - Koala', () => {
	test('Should return a string / url', async () => {
		expect(typeof await sayua.img.koala()).toBe('string')
	})
})
