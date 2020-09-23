import Head from 'next/head'

import Navbar from '../Navbar'
import Header from './Header'
import Breadcrumbs from './Breadcrumbs'
import Main from './Main'
import Notice from './Notice'
import Subscribe from '../Subscribe'
import Footer from '../Footer'

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
