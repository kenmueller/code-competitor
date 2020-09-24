import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { readdirSync } from 'fs'
import { join } from 'path'

import Level from 'models/Level'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/Level/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

import styles from 'styles/components/Level/index.module.scss'

const LevelPage = () => {
	const slug = useRouter().query.slug as string
	const level: Level = require(`articles/levels/${slug}/index.mdx`).meta
	
	return (
		<>
			<Head>
				<title key="title">
					{level.name} - Code Competitor
				</title>
			</Head>
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
			<Main />
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

export const getStaticProps: GetStaticProps = async ({ params }) => ({
	props: {}
})
