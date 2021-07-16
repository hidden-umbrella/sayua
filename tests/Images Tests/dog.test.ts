import { img } from '../../src/index'

describe('Images - Dog', () => {
	test('Should return a string / url', async () => {
		expect(typeof await img.dog()).toBe('string')
	})
})
