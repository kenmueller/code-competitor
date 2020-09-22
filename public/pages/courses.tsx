import Head from 'next/head'

import Navbar from 'components/Navbar'
import Header from 'components/Courses/Header'
import Breadcrumbs from 'components/Courses/Breadcrumbs'
import Main from 'components/Courses/Main'

const Courses = () => (
	<>
		<Head>
			<title key="title">Courses - Code Competitor</title>
		</Head>
		<Navbar light />
		<Header />
		<Breadcrumbs />
		<Main />
	</>
)

export default Courses
