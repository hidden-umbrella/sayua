import sayua from '../../src/index'

describe('Images - Red Panda', () => {
	test('Should return a string / url', async () => {
		expect(typeof await sayua.img.animals.redPanda()).toBe('string')
	})
})
