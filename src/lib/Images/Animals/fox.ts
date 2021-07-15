import c from '@aero/centra'
import constants from '../../../constants'

/**
 * @returns Image link
 * @async
 */
export default async function fox (): Promise<string> {
	const { link }: { link: string } = await c(constants.URLS.baseURL)
		.path('img/fox')
		.json()
	return link
}
