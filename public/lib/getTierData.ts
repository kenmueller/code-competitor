const getTierData = (slug: string) => {
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
