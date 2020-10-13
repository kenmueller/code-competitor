import nanToNull from './nanToNull'

const levelSlugToNumber = (slug: string) => {
	const [, match] = slug.match(/^level\-(\d+)$/)
	
	return match
		? nanToNull(parseInt(match, 10))
		: null
}

export default levelSlugToNumber
