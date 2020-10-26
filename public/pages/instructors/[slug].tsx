import { renderToStaticMarkup } from 'react-dom/server'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { readdirSync } from 'fs'
import { join } from 'path'
import stripHtml from 'string-strip-html'

import Head from 'components/Head'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/InstructorProfile/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

export interface InstructorProfileProps {
	bio: string
}

const InstructorProfile: NextPage<InstructorProfileProps> = ({ bio }) => {
	const slug = useRouter().query.slug as string
	const { name } = require(`articles/instructors/${slug}.mdx`).meta
	
	return (
		<>
			<Head
				url={`https://codecompetitor.com/instructors/${slug}`}
				image={require(`images/instructors/${slug}.jpg`).src}
				title={`${name} - Code Competitor`}
				description={bio}
			/>
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

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
	const Bio = require(`articles/instructors/${slug}.mdx`).default
	
	return {
		props: {
			bio: stripHtml(renderToStaticMarkup(<Bio />)).result
		}
	}
}
