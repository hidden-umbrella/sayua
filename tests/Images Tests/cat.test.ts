import { images } from '../../src/index'

describe('Images - Cat', () => {
	test('Should return a string / url', async () => {
		expect(typeof await images.cat()).toBe('string')
	})
})
