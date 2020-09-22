import Head from 'next/head'

import Navbar from 'components/Navbar'
import Header from 'components/Courses/Header'

const Courses = () => (
	<>
		<Head>
			<title key="title">Courses - Code Competitor</title>
		</Head>
		<Navbar light />
		<Header />
	</>
)

export default Courses
