import { LEVEL_SLUG_REGEX } from './constants'

export const getNumberFromLevelSlug = (slug: string) => {
	const match = slug.match(LEVEL_SLUG_REGEX)?.[1]
	const number = match && parseInt(match, 10)
	
	return typeof number !== 'number' || Number.isNaN(number)
		? null
		: number
}
