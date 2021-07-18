import * as c from '@aero/centra'
import constants from './constants'

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

/**
 * @returns Image link
 * @async
 */
export async function wink (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('animu/wink')
		.json()
	return link
}

/**
 * @returns Image link
 * @async
 */
export async function pat (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('animu/pat')
		.json()
	return link
}

/**
 * @returns Image link
 * @async
 */
export async function hug (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('animu/hug')
		.json()
	return link
}

/**
 * @returns {object} Returns object
 * @async
 */
export async function meme (): Promise<Meme> {
	const data: Meme = await c(constants.URLS.baseURL)
		.path('meme')
		.json()
	return data
}

/**
 * @internal
 */
interface Meme {
	id: number
	image: string
	caption: string
	category: string
}
