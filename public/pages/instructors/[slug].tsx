import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { readdirSync } from 'fs'
import { join } from 'path'

import Instructor from 'models/Instructor'
import Navbar from 'components/Navbar'
import Header from 'components/Header'

export interface InstructorProfileProps {
	user: Instructor
}

const InstructorProfile = ({ user }: InstructorProfileProps) => (
	<>
		<Head>
			<title key="title">
				{user.name} - Code Competitor
			</title>
		</Head>
		<Navbar light />
		<Header title="Instructor Profile" />
	</>
)

export default InstructorProfile

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: readdirSync(join(process.cwd(), 'data/instructors')).map(path => ({
		params: {
			slug: path.replace(/\.json$/, '')
		}
	})),
	fallback: false
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({
	props: {
		user: require(`data/instructors/${params.slug}.json`)
	}
})
