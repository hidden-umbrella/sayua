import * as c from '@aero/centra'
import constants from './constants'

/**
 * Adds a rainbow overlay over an image
 * @param {string} avatar The url of the image you want to add a overlay to.
 * @returns Image link
 * @async
 */
export async function gay (avatar: string): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('canvas/gay')
		.query({ avatar: avatar })
		.json()
	return link
}

/**
 * Adds a glass overlay over an image
 * @param {string} avatar The url of the image you want to add a overlay to.
 * @returns Image link
 * @async
 */
export async function glass (avatar: string): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('canvas/glass')
		.query({ avatar: avatar })
		.json()
	return link
}

/**
 * Adds a GTA 5 Wasted overlay over an image
 * @param {string} avatar The url of the image you want to add a overlay to.
 * @returns Image link
 * @async
 */
export async function wasted (avatar: string): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('canvas/wasted')
		.query({ avatar: avatar })
		.json()
	return link
}

/**
 * Adds a jail overlay over an image
 * @param {string} avatar The url of the image you want to add a overlay to.
 * @returns Image link
 * @async
 */
export async function jail (avatar: string): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('canvas/jail')
		.query({ avatar: avatar })
		.json()
	return link
}
