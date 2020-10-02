import { renderToStaticMarkup } from 'react-dom/server'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { readdirSync } from 'fs'
import { join } from 'path'
import stripHtml from 'string-strip-html'

import Level from 'models/Level'
import Head from 'components/Head'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/Level/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

import styles from 'styles/components/Level/index.module.scss'

export interface LevelPageProps {
	description: string
	lastSession: number
}

const LevelPage = ({ description, lastSession }: LevelPageProps) => {
	const slug = useRouter().query.slug as string
	const level: Level = require(`articles/levels/${slug}/index.mdx`).meta
	
	return (
		<>
			<Head
				url={`https://codecompetitor.com/levels/${slug}`}
				title={`${level.name} - Code Competitor`}
				description={description}
			/>
			<Navbar light />
			<Header className={styles.header} title={level.name}>
				{level.subtitle}
			</Header>
			<Breadcrumbs
				trail={[
					{ url: '/', title: 'Home' },
					{ url: '/courses', title: 'Courses' }
				]}
				title={level.name}
			/>
			<Main lastSession={lastSession} />
			<Subscribe />
			<Footer />
		</>
	)
}

export default LevelPage

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: readdirSync(join(process.cwd(), 'articles/levels')).map(slug => ({
		params: { slug }
	})),
	fallback: false
})

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
	const Description = require(`articles/levels/${slug}/index.mdx`).default
	
	return {
		props: {
			description: stripHtml(renderToStaticMarkup(<Description />)).result,
			lastSession: readdirSync(join(process.cwd(), `articles/levels/${slug}/sessions`))
				.reduce((max, path) => (
					Math.max(max, parseInt(path.replace(/\.mdx$/, '')))
				), -1)
		}
	}
}
