import * as sayua from '../../src/index'

const str = 'Hello World!'

describe('Base64 - Encode', () => {
	test('Should return "SGVsbG8gV29ybGQh"', async () => {
		expect(await sayua.base64.encode(str)).toBe('SGVsbG8gV29ybGQh')
	})
})
