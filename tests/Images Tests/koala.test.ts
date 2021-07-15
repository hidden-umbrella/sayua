import { images } from '../../src/index'

describe('Images - Koala', () => {
	test('Should return a string / url', async () => {
		expect(typeof await images.koala()).toBe('string')
	})
})
