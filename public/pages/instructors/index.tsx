import { GetStaticProps } from 'next'
import { readdirSync } from 'fs'
import { join } from 'path'

import { BasicInstructor } from 'models/Instructor'
import Head from 'components/Head'
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
		<Head
			url="https://codecompetitor.com/instructors"
			title="Instructors - Code Competitor"
			description="Explore all instructors currently working at Code Competitor."
		/>
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
		users: readdirSync(join(process.cwd(), 'articles/instructors')).map(path => ({
			slug: path.replace(/\.mdx$/, ''),
			name: require(`articles/instructors/${path}`).meta.name
		}))
	}
})
