import sayua from '../../src/index'

describe('Images - Fox', () => {
	test('Should return a string / url', async () => {
		expect(typeof await sayua.img.animals.fox()).toBe('string')
	})
})
