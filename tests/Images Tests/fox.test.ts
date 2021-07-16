import { img } from '../../src/index'

describe('Images - Fox', () => {
	test('Should return a string / url', async () => {
		expect(typeof await img.fox()).toBe('string')
	})
})
