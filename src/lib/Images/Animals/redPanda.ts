import * as c from '@aero/centra'
import constants from '../../../constants'

/**
 * @returns Image link
 * @async
 */
export default async function redPanda (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('img/red_panda')
		.json()
	return link
}
