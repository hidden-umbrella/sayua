import c from '@aero/centra'
import constants from '../../../constants'

/**
 * @returns Image link
 * @async
 */
export default async function panda (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('img/panda')
		.json()
	return link
}
