import { GetStaticPaths, GetStaticProps } from 'next'
import { readdirSync as readdir } from 'fs'
import { join } from 'path'

import Layout from 'components/Layout'

const ReadinessTest = ({ level }: { level: string }) => {
	const {
		default: Document,
		title
	} = require(`documents/readiness-tests/${level}.mdx`)
	
	return (
		<Layout title={title}>
			<Document />
		</Layout>
	)
}

export default ReadinessTest

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: readdir(join(process.cwd(), 'documents/readiness-tests'))
		.map(name => ({
			params: {
				level: name.replace(/\.mdx$/, '')
			}
		})),
	fallback: false
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({
	props: params
})
