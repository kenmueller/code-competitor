import { GetStaticPaths } from 'next'
import { readdirSync } from 'fs'
import { join } from 'path'

const getStaticPaths: GetStaticPaths = async () => ({
	paths: readdirSync(join(process.cwd(), 'articles/levels'))
		.filter(slug => !require(`articles/levels/${slug}/index.mdx`).meta.comingSoon)
		.map(slug => ({ params: { slug } })),
	fallback: false
})

export default getStaticPaths
