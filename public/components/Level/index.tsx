import { useRouter } from 'next/router'
import NextHead from 'next/head'

import Level from 'models/Level'
import Head from 'components/Head'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/Level/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

import { src as background } from 'images/level/header.png'

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
			<NextHead>
				<link key="preload-level-header" rel="preload" as="image" href={background} />
			</NextHead>
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
