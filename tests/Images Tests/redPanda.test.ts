import { img } from '../../src/index'

describe('Images - Red Panda', () => {
	test('Should return a string / url', async () => {
		expect(typeof await img.redPanda()).toBe('string')
	})
})
