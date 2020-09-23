import Head from 'next/head'

import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/Jobs/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const Jobs = () => (
	<>
		<Head>
			<title key="title">
				Jobs - Code Competitor
			</title>
		</Head>
		<Navbar light />
		<Header title="Join the Team" />
		<Breadcrumbs
			trail={[{ url: '/', title: 'Home' }]}
			title="Jobs"
		/>
		<Main />
		<Subscribe />
		<Footer />
	</>
)

export default Jobs
