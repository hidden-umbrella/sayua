import { img } from '../../src/index'

describe('Images - Birb', () => {
	test('Should return a string / url', async () => {
		expect(typeof await img.birb()).toBe('string')
	})
})
