import * as sayua from '../../src/index'

describe('Images - Meme', () => {
	test('Should return a string / url', async () => {
		expect(typeof await sayua.img.meme()).toBe('object')
	})
})
