import * as sayua from '../../src/index'

let avatar = 'https://cdn.discordapp.com/avatars/389252140184633363/29dea926e406d3a8a754f0ce8ad4c4e0.png?size=2048'

describe('Overlay - Gay', () => {
	test('Should return a string / url', async () => {
		expect(typeof await sayua.canvas.gay(avatar)).toBe('object')
	})
})
