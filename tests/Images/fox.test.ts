import { images } from '../../src/index'

describe('Images - Fox', () => {
	test('Should return a string / url', async () => {
		expect(typeof await images.fox()).toBe('string')
	})
})
