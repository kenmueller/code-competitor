import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { readdirSync } from 'fs'
import { join } from 'path'

import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/InstructorProfile/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const InstructorProfile = () => {
	const slug = useRouter().query.slug as string
	const { name } = require(`articles/instructors/${slug}.mdx`).meta
	
	return (
		<>
			<Head>
				<title key="title">
					{name} - Code Competitor
				</title>
			</Head>
			<Navbar light />
			<Header title="Instructor Profile" />
			<Breadcrumbs
				trail={[
					{ url: '/', title: 'Home' },
					{ url: '/instructors', title: 'Instructors' }
				]}
				title={name}
			/>
			<Main />
			<Subscribe />
			<Footer />
		</>
	)
}

export default InstructorProfile

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: readdirSync(join(process.cwd(), 'articles/instructors')).map(path => ({
		params: {
			slug: path.replace(/\.mdx$/, '')
		}
	})),
	fallback: false
})

export const getStaticProps: GetStaticProps = async () => ({
	props: {}
})
