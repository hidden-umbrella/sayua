import * as sayua from '../../src/index'

describe('Images - Pat', () => {
	test('Should return a string / url', async () => {
		expect(typeof await sayua.img.pat()).toBe('string')
	})
})
