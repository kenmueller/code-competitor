import { GetStaticProps } from 'next'
import Head from 'next/head'
import { readdirSync } from 'fs'
import { join } from 'path'

import { BasicInstructor } from 'models/Instructor'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/Instructors/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

export interface InstructorsProps {
	users: BasicInstructor[]
}

const InstructorProfile = ({ users }: InstructorsProps) => (
	<>
		<Head>
			<title key="title">
				Instructors - Code Competitor
			</title>
		</Head>
		<Navbar light />
		<Header title="Instructors" />
		<Breadcrumbs
			trail={[{ url: '/', title: 'Home' }]}
			title="Instructors"
		/>
		<Main users={users} />
		<Subscribe />
		<Footer />
	</>
)

export default InstructorProfile

export const getStaticProps: GetStaticProps = async () => ({
	props: {
		users: readdirSync(join(process.cwd(), 'data/instructors')).map(path => ({
			slug: path.replace(/\.json$/, ''),
			name: require(`data/instructors/${path}`).name
		}))
	}
})
