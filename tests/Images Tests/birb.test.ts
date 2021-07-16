import sayua from '../../src/index'

describe('Images - Birb', () => {
	test('Should return a string / url', async () => {
		expect(typeof await sayua.img.animals.birb()).toBe('string')
	})
})
