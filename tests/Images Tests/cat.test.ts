import { img } from '../../src/index'

describe('Images - Cat', () => {
	test('Should return a string / url', async () => {
		expect(typeof await img.cat()).toBe('string')
	})
})
