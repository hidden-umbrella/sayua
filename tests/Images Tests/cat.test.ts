import * as sayua from '../../src/index'

describe('Images - Cat', () => {
	test('Should return a string / url', async () => {
		expect(typeof await sayua.img.cat()).toBe('string')
	})
})
