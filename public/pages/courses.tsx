import Head from 'next/head'

import Navbar from 'components/Navbar'
import Header from 'components/Courses/Header'
import Breadcrumbs from 'components/Courses/Breadcrumbs'
import Main from 'components/Courses/Main'
import Notice from 'components/Courses/Notice'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const Courses = () => (
	<>
		<Head>
			<title key="title">Courses - Code Competitor</title>
		</Head>
		<Navbar light />
		<Header />
		<Breadcrumbs />
		<Main />
		<Notice />
		<Subscribe />
		<Footer />
	</>
)

export default Courses
