import Tier from 'models/Tier'

const getTierData = (slug: string): Tier => {
	const tier = require(`articles/tiers/${slug}.mdx`).meta
	
	return {
		...tier,
		slug,
		levels: tier.levels.map((slug: string) => ({
			slug,
			...require(`articles/levels/${slug}/index.mdx`).meta
		}))
	}
}

export default getTierData
