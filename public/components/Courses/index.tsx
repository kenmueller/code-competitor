import { useRouter } from 'next/router'

import Tier from 'models/Tier'
import capitalize from 'lib/capitalize'
import Head from '../Head'
import Navbar from '../Navbar'
import Header from '../Header'
import Breadcrumbs from '../Breadcrumbs'
import Main from './Main'
import Notice from './Notice'
import Subscribe from '../Subscribe'
import Footer from '../Footer'

export interface CoursesProps {
	tiers: Tier[]
}

const Courses = ({ tiers }: CoursesProps) => {
	const tier = useRouter().query.tier as string | undefined
	
	return (
		<>
			<Head
				url={`https://codecompetitor.com/courses${tier ? `/${tier}` : ''}`}
				title={`${tier ? `${capitalize(tier)} ` : ''}Courses - Code Competitor`}
				description={`View all ${tier ? `${tier} ` : ''}courses from Code Competitor.`}
			/>
			<Navbar light />
			<Header title="Courses">
				"In an application where we are processing millions of objects,
				it is not unusual to be able to make a program millions of times
				faster by using a well-designed algorithm."
				<br /><br />
				- Algorithms, by Sedgewick and Wayne
			</Header>
			<Breadcrumbs
				trail={[{ url: '/', title: 'Home' }]}
				title="Courses"
			/>
			<Main tiers={tiers} />
			<Notice />
			<Subscribe />
			<Footer />
		</>
	)
}

export default Courses
