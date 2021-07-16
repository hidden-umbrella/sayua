import { img } from '../../src/index'

describe('Images - Panda', () => {
	test('Should return a string / url', async () => {
		expect(typeof await img.panda()).toBe('string')
	})
})
