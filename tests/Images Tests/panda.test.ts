import sayua from '../../src/index'

describe('Images - Panda', () => {
	test('Should return a string / url', async () => {
		expect(typeof await sayua.img.animals.panda()).toBe('string')
	})
})
