import { img } from '../../src/index'

describe('Images - Koala', () => {
	test('Should return a string / url', async () => {
		expect(typeof await img.koala()).toBe('string')
	})
})
