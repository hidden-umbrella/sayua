import * as c from '@aero/centra'
import constants from '../../constants'

/**
 * @returns Image link
 * @async
 */
export async function birb (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('img/birb')
		.json()
	return link
}

/**
 * @returns Image link
 * @async
 */
export async function dog (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('img/dog')
		.json()
	return link
}

/**
 * @returns Image link
 * @async
 */
export async function cat (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('img/cat')
		.json()
	return link
}

/**
 * @returns Image link
 * @async
 */
export async function panda (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('img/panda')
		.json()
	return link
}

/**
 * @returns Image link
 * @async
 */
export async function redPanda (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('img/red_panda')
		.json()
	return link
}

/**
 * @returns Image link
 * @async
 */
export async function fox (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('img/fox')
		.json()
	return link
}

/**
 * @returns Image link
 * @async
 */
export async function koala (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('img/koala')
		.json()
	return link
}
