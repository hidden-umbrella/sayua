import { images } from '../../src/index'

describe('Images - Birb', () => {
	test('Should return a string / url', async () => {
		expect(typeof await images.birb()).toBe('string')
	})
})
