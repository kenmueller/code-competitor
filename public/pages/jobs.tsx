import { NextPage, GetStaticProps } from 'next'
import { readdirSync } from 'fs'
import { join } from 'path'

import { JobCategory } from 'models/Job'
import normalize from 'lib/normalize'
import Head from 'components/Head'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/Jobs/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

export interface JobsProps {
	categories: JobCategory[]
}

const Jobs: NextPage<JobsProps> = ({ categories }) => (
	<>
		<Head
			url="https://codecompetitor.com/jobs"
			title="Jobs - Code Competitor"
			description="Explore the available jobs at Code Competitor."
		/>
		<Navbar light />
		<Header title="Join the Team" />
		<Breadcrumbs
			trail={[{ url: '/', title: 'Home' }]}
			title="Jobs"
		/>
		<Main categories={categories} />
		<Subscribe />
		<Footer />
	</>
)

export default Jobs

export const getStaticProps: GetStaticProps = async () => ({
	props: {
		categories: readdirSync(join(process.cwd(), 'articles/jobs')).map(category => ({
			slug: normalize(category),
			name: category,
			jobs: readdirSync(join(process.cwd(), `articles/jobs/${category}`)).map(job => ({
				slug: normalize(job),
				name: job
			}))
		}))
	}
})
