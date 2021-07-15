import { images } from '../../src/index'

describe('Images - Panda', () => {
	test('Should return a string / url', async () => {
		expect(typeof await images.panda()).toBe('string')
	})
})
