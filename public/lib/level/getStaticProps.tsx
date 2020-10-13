import { renderToStaticMarkup } from 'react-dom/server'
import { GetStaticProps } from 'next'
import { readdirSync } from 'fs'
import { join } from 'path'
import stripHtml from 'string-strip-html'
import levelSlugToNumber from 'lib/levelSlugToNumber'

const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
	const number = levelSlugToNumber(slug as string)
	
	if (number === null)
		throw new Error(`Invalid level slug "${slug}"`)
	
	const Description = require(`articles/levels/${slug}/index.mdx`).default
	
	return {
		props: {
			number,
			description: stripHtml(renderToStaticMarkup(<Description />)).result,
			lastSession: readdirSync(join(process.cwd(), `articles/levels/${slug}/sessions`))
				.reduce((max, path) => (
					Math.max(max, parseInt(path.replace(/\.mdx$/, '')))
				), -1)
		}
	}
}

export default getStaticProps
