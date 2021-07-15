import { images } from '../../src/index'

describe('Images - Dog', () => {
	test('Should return a string / url', async () => {
		expect(typeof await images.dog()).toBe('string')
	})
})
