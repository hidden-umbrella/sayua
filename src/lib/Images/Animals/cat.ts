import * as c from '@aero/centra'
import constants from '../../../constants'

/**
 * @returns Image link
 * @async
 */
export default async function cat (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('img/cat')
		.json()
	return link
}