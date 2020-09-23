import Head from 'next/head'

import Navbar from '../Navbar'
import Header from '../Header'
import Breadcrumbs from '../Breadcrumbs'
import Main from './Main'
import Notice from './Notice'
import Subscribe from '../Subscribe'
import Footer from '../Footer'

const Courses = () => (
	<>
		<Head>
			<title key="title">
				Courses - Code Competitor
			</title>
		</Head>
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
		<Main />
		<Notice />
		<Subscribe />
		<Footer />
	</>
)

export default Courses
