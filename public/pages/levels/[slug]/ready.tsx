import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { readdirSync } from 'fs'
import { join } from 'path'

import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/LevelReady/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

export interface LevelReadyProps {
	name: string
}

const LevelReady = ({ name }: LevelReadyProps) => {
	const slug = useRouter().query.slug as string
	
	return (
		<>
			<Head>
				<title key="title">
					Are you ready for {name}? - Code Competitor
				</title>
			</Head>
			<Navbar light />
			<Header title={`Are you ready for ${name}?`} />
			<Breadcrumbs
				trail={[
					{ url: '/', title: 'Home' },
					{ url: '/courses', title: 'Courses' },
					{ url: `/levels/${slug}`, title: name }
				]}
				title={`Are you ready for ${name}?`}
			/>
			<Main />
			<Subscribe />
			<Footer />
		</>
	)
}

export default LevelReady

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: readdirSync(join(process.cwd(), 'articles/levels')).map(slug => ({
		params: { slug }
	})),
	fallback: false
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({
	props: {
		name: require(`articles/levels/${params.slug}/index.mdx`).meta.name
	}
})
