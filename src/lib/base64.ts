import * as c from '@aero/centra'
import constants from './constants'

/**
 * @param {string} str Text to be encoded.
 * @returns Encoded string
 * @async
 */
export async function encode (str: string): Promise<string> {
	const { base64 }: { base64: string } = await c(constants.URLS.baseURL)
		.path('base64')
		.query({ encode: str })
		.json()
	return base64
}

/**
 * @param {string} str Your base64 encoded string.
 * @returns Decoded string
 * @async
 */
export async function decode (str: string): Promise<string> {
	const { text }: { text: string } = await c(constants.URLS.baseURL)
		.path('base64')
		.query({ decode: str })
		.json()
	return text
}
