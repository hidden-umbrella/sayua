import * as sayua from '../../src/index'

const str = 'SGVsbG8gV29ybGQh'

describe('Base64 - Decode', () => {
	test('Should return "Hello World!"', async () => {
		expect(await sayua.base64.decode(str)).toBe('Hello World!')
	})
})
